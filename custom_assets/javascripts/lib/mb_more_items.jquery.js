
(function( $ ){

	/**
	* The plugin namespace, ie for $('.selector').myPluginName(options)
	*
	* Also the id for storing the object state via $('.selector').data()
	*/
	var PLUGIN_NS = 'more_items';

	/*###################################################################################
	* PLUGIN BRAINS
	* Template From: https://gist.github.com/Club15CC/1300890
	* INSTRUCTIONS:
	*
	* To init, call...
	* $('selector').more_items({options})
	* i.e. $('ul.articles.list_view').more_items({"url": "/more_news", "params": {search: search, date: date, category: category} });
	*
	* This will bind a click listener to the button that is passed in button: jquery selector (or defaulted to $('.more_button .button') which will call
	* $('selector').more_items('getMoreItemsAndAppend')
	*
	* If you need to change the build html  (which you probably do) you can create a fn and call like:
	*  var build_item_fn = function(item){
	*   ... bunch of html ...
	*  }
	 * $('ul.articles.list_view').more_items({"url": "/api/v1/youtube_items", "build_item_fn": build_item_fn });
	*
	* If you need to pass in additional query params for some reason you can call the plugin and pass in params
	* i.e. $('ul.list_view').more_items('getMoreItemsAndAppend', {foo: "bar"})
	*
	* FYI:
	* The scope, ie "this", **is the object itself**.  The jQuery match is stored
	* in the property this.$T.  In general this value should be returned to allow
	* for jQuery chaining by the user.
	*
	* Methods which begin with underscore are private and not
	* publicly accessible.
	*
	*###################################################################################*/

	var Plugin = function ( target, options )
	{
		this.$T = $(target);
		this.options= $.extend(
				true,               // deep extend
				{
					page_number: 0,
					url: '',
					button: $('.more_button .button'),
					entry_selector: target.children('li:last'),
					build_item_fn: Plugin.prototype.buildItem,
					more_fn: 'getMoreItemsAndAppend'
				},
				options
		);
		this._init( target, this.options );


		/** #### PROPERTIES #### */
			// Here rather than below in Plugin.prototype.myProp and in _init() as this way is DRY-er
			//		this._testProp = 'testProp!';     // Private property declaration, underscore optional
		/** #### CONSTANTS #### */
			//	Plugin.MY_CONSTANT = 'value';

		return this;

	};



	/** #### INITIALISER #### */
	Plugin.prototype._init = function ( target, options ){
		options.button.on("click", function(event){
			event.preventDefault();
			$(target).more_items(options.more_fn);
		});

	};

	/** #### PUBLIC API (see notes) #### */
	Plugin.prototype.getMoreItemsAndAppend = function (params){
		//console.log('inside getMoreItemsAndAppend!');
		$('.loading').show();
		this.options.button.hide();
		this._getMore(params[0]); //passed in as array
		return this.$T;        // support jQuery chaining
	};

	Plugin.prototype.exposeNextPage = function(){
		//console.log('MORE_ITEMS: exposeNextPage');
		this.options.page_number += 1;
		this.$T.find('.page_' + this.options.page_number).show();
		//check to see if there is a next page
		var nextPage = this.options.page_number + 1
		if (this.$T.find('.page_' + nextPage).length == 0){
			this.options.button.hide();
		}
	};

	Plugin.prototype._getMore = function (params){
		var self = this;
		this.options.page_number += 1;
		var query_params = $.extend(params, {"page": this.options.page_number}, this.options.params);
		var button = this.options.button;
		$.getJSON(this.options.url, query_params)
				.done(function(data) {
					//console.log( "ajax request success" );
					var html = "";
					for(var i = 0; i < data.items.length; i++){
						html +=  self.options.build_item_fn(data.items[i]);
					}
					if (html != ""){
						self.options.entry_selector.after(html);
						self.options.entry_selector = self.$T.children('li:last')
					}
					if(data.error_message){
						self.options.entry_selector.after("<hr><div class='error'>"+ data.error_message + "</div>");
					}
					$('.loading').hide();
					if(data.more && data.more == true){
						button.show();
					}
				})
				.fail(function(jqxhr, textStatus, error) {
					var err = textStatus + ", " + error;
					console.log( "ajax request failed: " + err );
				});
	}


	Plugin.prototype.buildItem = function (data){
		var strVar="";
		strVar += "<li>";
		strVar += " <hr>";
		strVar += " <div class=\"list_content\">";
		strVar += "   <div class=\"list_image\">";
		strVar += "       <a href=\""+data.url+"\">";
		strVar += "       <img alt=\"\" src=\""+ data.thumb +"\">";
		strVar += "     <\/a>";
		strVar += "   <\/div>";
		strVar += "   <div class=\"list_text\">";
		strVar += "     <div class=\"date\">";
		strVar +=          data.date;
		strVar += "     <\/div>";
		strVar += "     <h3 class=\"list_title\">";
		strVar += "       <a href=\""+data.url+"\">";
		strVar += 					data.title;
		strVar += "       <\/a>";
		strVar += "     <\/h3>";
		strVar += "     <div class=\"list_description\">";
		strVar +=        data.description;
		strVar += "     <\/div>";
		strVar += "   <\/div>";
		strVar += " <\/div>";
		strVar += "<\/li>";
		return strVar;
	};

	/*###################################################################################
	* JQUERY HOOK
	###################################################################################*/

	/**
	* Generic jQuery plugin instantiation method call logic
	*
	* Method options are stored via jQuery's data() method in the relevant element(s)
	* Notice, myActionMethod mustn't start with an underscore (_) as this is used to
	* indicate private methods on the PLUGIN class.
	*/
	$.fn[ PLUGIN_NS ] = function( methodOrOptions )
	{
		if (!$(this).length) {
			return $(this);
		}
		var instance = $(this).data(PLUGIN_NS);

		// CASE: action method (public method on PLUGIN class)
		if ( instance &&
				methodOrOptions.indexOf('_') != 0 &&
				instance[ methodOrOptions ] &&
				typeof( instance[ methodOrOptions ] ) == 'function' ) {

			return instance[ methodOrOptions ]( Array.prototype.slice.call( arguments, 1 ) );


			// CASE: argument is options object or empty = initialise
		} else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {

			instance = new Plugin( $(this), methodOrOptions );    // ok to overwrite if this is a re-init
			$(this).data( PLUGIN_NS, instance );
			return $(this);

			// CASE: method called before init
		} else if ( !instance ) {
			$.error( 'Plugin must be initialised before using method: ' + methodOrOptions );

			// CASE: invalid method
		} else if ( methodOrOptions.indexOf('_') == 0 ) {
			$.error( 'Method ' +  methodOrOptions + ' is private!' );
		} else {
			$.error( 'Method ' +  methodOrOptions + ' does not exist.' );
		}
	};



})(jQuery);
