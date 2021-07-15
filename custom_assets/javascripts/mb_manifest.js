/* ---------------------- main.js  ------------------------------ */


/* ----- main ----- */


var main = {
	spinner_opts: {
		lines: 8, // The number of lines to draw
		length: 5, // The length of each line
		width: 3, // The line thickness
		radius: 6, // The radius of the inner circle
		color: '#000', // #rbg or #rrggbb
		speed: 1, // Rounds per second
		trail: 100, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		className: 'spinner',
		top: "20px",
		left: "50%"
	},

	init: function() {
    /**
     * Our core utils
     * Requires: mb_utils.js
     */
    mb_utils.init();

    /**
     * Make touchscreen touches respond faster 
     * Requires vendor/fastclick.js
     */
    FastClick.attach(document.body);
    
    /**
     * Init site header
     * 
     */
		site_header.init();
		
		/**
     * Init overlay nav
     * 
     */
		nav.init();
    
    /**
     * Init listeners that affect all pages 
     * 
     */
		main.initListeners();
		
		/**
     * Init overlay nav
     * 
     */
		lightbox.init();
		

    /*
     * OPTIONAL: 
     * Sets default breakpoint for classes which allow registering of responsive elements with 
     * mb_utils.registerResponsiveElement(element, desktop_display_container, mobile_display_container, optional_responsive_breakpoint)
     * Requires mb_responsive.js
     */
    //mb_responsive_utils.setResponsiveBreakpoint(769);

  },

	initListeners: function(){
	  // If not on mobile, activate tooltips on hover
	  if (!isMobile.any()){
		  $('.has_tooltip').tooltipsy({alignTo: "element", delay: 0, offset: [1, 0], css: {'margin-left': '10px'}});
  		$('.has_tooltip_bottom').tooltipsy({alignTo: "element", delay: 0, offset: [0, 1], css: {'margin-top': '5px'}});
		}
	}
}

/* ----- end main ----- */



/* init onReady */
$(function() {
  main.init();
});
/* ---------------------- NIGHT SKY NETWORK - mb_utils.js  ------------------------------ */

/* ----- mb_utils ----- */


var mb_utils = {

  init: function() { 
      this._extendJquery();
      this._extendJavascript();
    },
    
  _extendJquery: function () {
    // exists function returns a boolean ... use example: $('body').exists();
    jQuery.fn.exists = function () { return this.length>0; };
  },

  _extendJavascript: function () {
    if (!String.prototype.trim) {
      String.prototype.trim=function() { return this.replace(/^\s+|\s+$/g, ''); };
    }
  },
  /* 
   * SlideToggle is jquery's expander. 
   * .. allows a click to cause an element to expand
   * .. this allows an extra callback function and speed vars
   */
  addSlideToggleListener: function( toClick, toSlide, andDoFn, speed ) {
    toClick.click(function(){
      andDoFn();
      toSlide.slideToggle(speed);
    });
  },
  
  // Handle touch vs. click events
  touchclick: function (sel, fnc) {
    $(sel).on('touchstart click', function(event) {
      event.stopPropagation();
      event.preventDefault();
      if(event.handled !== true) {
        fnc($(this), event);
        event.handled = true;
      } else {
        return false;
      }
    });
  },

  /*
   * Positioning of Elements
   * BERGEN: Currently this is only being used by the nav, why not put this in mb_nav?
   */

  /* Distance from top of document */
  distanceFromTop: function ( element ) { 
    return $(element).offset().top;
  },
  
  /* Distance from top of closest positioned parent */
  distanceFromTopOfContainer: function ( element ) { 
    return $(element).position().top;
  },

  /*
   * Query String retrieval 
   */
  getParam: function(p){
    var queryParams = mb_utils._getQueryParams();
    return queryParams[p];
  },

  _getQueryParams: function() {
    var qs = document.location.search;
    qs = qs.split("+").join(" ");

    var params = {}, tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1]).toString()] = decodeURIComponent(tokens[2]);
    }

    return params;
  },
	updateDropkickDDL: function(id,value){
		//Get the select element and dropkick container
		var select = $(id);
		var dk = select.parents('.dk_container');

		//Set the value of the select
		select.val(value);

		//Loop through the dropkick options
		dk.find('.dk_options_inner').children("li").each(function () {

			var li = $(this);
			var link = li.children('a');

			//Remove the 'current' class if it has it
			li.removeClass('dk_option_current');

			//If the option has the value we passed in
			if (link.data('dk-dropdown-value') == value) {

				//Set the 'current' class on the option
				li.addClass('dk_option_current');

				//Set the text of the dropkick element
				dk.find('.dk_label').text(link.text());

			}

		});
	},
	
	// Animates to an element by ID (with offset to allow flexible positioning)
	slideToElement: function(targetId, offset) {
	  console.log('slideToElement.offset: ' + offset);
	  if(typeof(offset)==='undefined') offset = 0;
	  $("html, body").animate({ scrollTop: $(targetId).offset().top + offset}, 400);
	},
  
	simpleFormat: function(str,wrap) {
		str = str.replace(/\r\n?/, "\n");
		str = $.trim(str);
		if (str.length > 0) {
			str = str.replace(/\n\n+/g, '</p><p>');
			str = str.replace(/\n/g, '<br />');
			if(wrap){
				str = '<p>' + str + '</p>';
			}
		}
		return str;
	},
	
	getIEVersion: function () {
      var agent = navigator.userAgent;
      var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
      var matches = agent.match(reg);
      if (matches != null) {
          return { major: matches[1], minor: matches[2] };
      }
      return { major: "-1", minor: "-1" };
  }

};

/* ----- end mb_utils ----- */

/* ----- Check for Mobile ----- */

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  iPad: function() {
    return navigator.userAgent.match(/iPad/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    //console.log("w:" +screen.width + "ua:" + navigator.userAgent + ", isIpad:" + isMobile.iPad());
    return (screen.width <= 500) || ( isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }

};

/* ----- end Check for Mobile ----- */

;
/* ----- Responsive Elements library: extending mb_utils ----- */

/* 
 * For elements that require specific/custom responsive movement
 * Register an element as responsive so it can move from its 
 * large display to its small display container 
 *
 * Currently limited to a basic 2-tier (large vs small) responsive setup
 *
 * mb_utils.js must precede this in the .js load order
 *
 * USAGE:
 *  Set up #search_module and two containers #primary_column and #secondary_column
 *  
 *  %script
 *    mb_utils.initResponsiveElement('#search_module', '#large_display_container', '#small_display_container');
 *     or
 *    mb_utils.initResponsiveElement('#search_module', '#large_display_container', '#small_display_container',450);
 */


$.extend(mb_utils, {
  initResponsiveElement: function( element, large_display_container, small_display_container, responsive_breakpoint, moveToSmallOnTouchscreen ) {  //BERGEN wants to discuss the moveToSmallOnTouchscreen variable
    //console.log ('responsive_breakpoint:' + responsive_breakpoint);
    if (typeof responsive_breakpoint == 'undefined') {
      responsive_breakpoint = mb_responsive_utils.getResponsiveBreakpoint();
    }
    
    //console.log('moveToSmallOnTouchscreen: ' + moveToSmallOnTouchscreen);
    //console.log("Registering Responsive Element: " + element, large_display_container, small_display_container, responsive_breakpoint, moveToSmallOnTouchscreen);

    $(window).bind("load resize", function() { 
      //console.log("Moving Responsive Element: " + element, large_display_container, small_display_container, responsive_breakpoint, moveToSmallOnTouchscreen);
      mb_responsive_utils.moveResponsiveElements(element, large_display_container, small_display_container, responsive_breakpoint, moveToSmallOnTouchscreen);
      //console.log("Done Moving Responsive Element: " + element);
    });
  } 
});

// Populate main.js with this to set a default breakpoint for your site:

/* 
 * Responsive Breakpoint
 * Sets default breakpoint for classes which allow registering of responsive elements with 
 *    mb_utils.initResponsiveElement('#search_module', '#secondary_column', '#primary_column');
 * Requires mb_responsive.js
 */
//mb_responsive_utils.setResponsiveBreakpoint(769);

var mb_responsive_utils = {
  _responsive_breakpoint: 769, /* default */

  setResponsiveBreakpoint: function ( new_breakpoint ) {
    this._responsive_breakpoint = new_breakpoint;
  },
  getResponsiveBreakpoint: function (  ) {
    return this._responsive_breakpoint;
  },

  moveResponsiveElements: function ( element, large_display_container, small_display_container, responsiveBreakpoint, moveToSmallOnTouchscreen ) {
    var isSmall = $(window).width() < this._responsive_breakpoint;
    //console.log("window width: " + $(window).width() + " is small? " + isSmall);
    var target_container = isSmall ? small_display_container : large_display_container;
    if (moveToSmallOnTouchscreen == true && $('html').hasClass('touch')) {
      //console.log('do moveToSmallOnTouchscreen: ', element, small_display_container);
      mb_responsive_utils._moveElementIfNecessary(element, small_display_container);
    } else {
      //console.log('dont moveToSmallOnTouchscreen', element, target_container);
      mb_responsive_utils._moveElementIfNecessary(element, target_container);
    }
    
  },    
  _moveElementIfNecessary: function ( element, targetContainer ) {
    if ($(targetContainer).attr('id')  != undefined && $(element).parent().attr('id') != undefined) {
      if ($(targetContainer).attr('id') != $(element).parent().attr('id')) { 
        console.log("Moving Responsive Element: " + element + " from #" + $(element).parent().attr('id') + " to " + targetContainer);
        $(element).prependTo(targetContainer);
      }
    }
  }
};
/* ----- Cookie Management Library: extending mb_utils ----- */


$.extend(mb_utils, {
  createCookie: function(name,value,days) {
    console.log ("mb_utils.createCookie: " + name, value, days);
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+'='+value+expires+'; path=/';
  },

  readCookie: function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        console.log ("mb_utils.readCookie: " + name, c.substring(nameEQ.length,c.length));
        return c.substring(nameEQ.length,c.length);
      }
    }
    return null;
  },

  eraseCookie: function(name) {
    mb_utils.createCookie(name,"",-1);
  }

});



/*
 * ----- Base64 for encoding----- 
 *
 * Usage: 
 *    mb_utils.createCookie("city", Base64.encode(locationString), 30);
 */

var Base64 = {
  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  // public method for encoding
  encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output +
          Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +
          Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);

    }

    return output;
  },

  // public method for decoding
  decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

      enc1 = Base64._keyStr.indexOf(input.charAt(i++));
      enc2 = Base64._keyStr.indexOf(input.charAt(i++));
      enc3 = Base64._keyStr.indexOf(input.charAt(i++));
      enc4 = Base64._keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }

    }

    output = Base64._utf8_decode(output);

    return output;

  },

  // private method for UTF-8 encoding
  _utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      }
      else if((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      }
      else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }

    return utftext;
  },

  // private method for UTF-8 decoding
  _utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      }
      else if((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i+1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      }
      else {
        c2 = utftext.charCodeAt(i+1);
        c3 = utftext.charCodeAt(i+2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }

    }
    return string;
  }
}
/* ----- Base64 for encoding----- */
;

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
/* 
*   site_header
*
*   This is a sticky header with branding,
*   search bar, and hamburger menu button
*
*/


var site_header = {
  
  lastScrollTop: 0, // Position where we turn off stickiness
  
  init: function () {
    site_header.initUI();
    site_header.initStickyHeader();
  },
  
  initUI: function () {
    $('a#menu_button').click(function(event){
			event.preventDefault();
			$('.main_nav_overlay').fadeIn(400);
		});
  },
  
  initStickyHeader: function () {
    
    // If the filter bar does not exist, allow a hideable sticky header (w/nav) -JM
		if(!$('.filter_bar').exists()){
  		$(window).scroll(function(){
  		  
  		  // Detect up scroll and set classes on the site header area
        var st = $(this).scrollTop();
        var isScrollingUp = st < site_header.lastScrollTop;
        main.lastScrollTop = st;
        
        // This will make the header fully sticky
        if ($(window).scrollTop() > 0) {
          $('.site_header_area').addClass('fixed');
  			  $('.site_header_area').addClass('fixed_show');
        } else {
          $('.site_header_area').removeClass('fixed');
			    $('.site_header_area').removeClass('fixed_show');
        }
        
  			// This will make the header sticky on scroll up only
  			/*
  			if ($(window).scrollTop() > 0 && isScrollingUp) {
  			  $('.site_header_area').addClass('fixed');
  			  $('.site_header_area').addClass('fixed_show');
			  } else if ($(window).scrollTop() > 300 && !isScrollingUp) {
			    $('.site_header_area').addClass('fixed');
  			  $('.site_header_area').removeClass('fixed_show');
			  } else {
			    $('.site_header_area').removeClass('fixed');
			    $('.site_header_area').removeClass('fixed_show');
			  }*/
  		});
		}
  }
}
;
/* 
*   nav
*
*   This is the nav overlay
*
*/


var nav = {
  
  init: function () {
    this.initListeners();
  },
  
  initListeners: function () {
    $('a.modal_close').click(function(event){
			event.preventDefault();
			$('.main_nav_overlay').fadeOut(400);
		});
  }
}
;
/* 
*   lightbox
*
*   This is lightbox for things like images and videos
*   Used on grid/list pages, but could be used elsewhere in future
*
*/


var lightbox = {
  
  init: function () {
    this.initFancybox();
  },
  
  initFancybox: function () {
    
    // only init if it is being used
    if ($('.fancybox').exists()) {
		  $(".fancybox").fancybox({
  			openEffect	: 'none',
  			closeEffect	: 'none',
  			closeBtn : false,
  			mouseWheel: false,
  			//maxWidth: $(window).width() - 165,
  			//maxHeight: $(window).height(),
  			fitToView: false,
  			width: '100%',
  			height: '100%',
  			autoSize: false,
  			theme: 'mb-info',
  			beforeLoad: function(){
  				this.title = lightbox.constructFancyBoxTitle(this.element, true)
  			},
  			afterShow: function(){
  				$('.close_button').click(function(){
  					parent.$.fancybox.close();
  					if(typeof _atw != "undefined"){
  						_atw.clb(); //close addthis popup
  					}
  				});
  				if(typeof addthis != "undefined"){
  					addthis.toolbox(
  							$(".addthis_toolbox").get()
  					);
  				}
  			},
  			padding : 0
  		});
		}

    if ($('.fancybox_video').exists()) {
  		var video_w, margin, arrows, video_h;
  		if (isMobile.any()){
  			//video_w = $(window).width() + 20;
  			//margin = [20, 20, 20, 20];
  			arrows = false;
  			//video_h = $(window).height();
  		} else {
  			//video_w = $(window).width() - 165;
  			//margin = [30, 55, 30, 55];
  			arrows = true;
  			//video_h = $(window).height() - 60;
  		}
  		$("a.fancybox_video").fancybox({
  			//minWidth: video_w,
        //minHeight: video_h,
        fitToView: false,
        autoscale: false,
        //margin: margin,
        //width: video_w,
        //height: video_h,
        autoSize: false,
        closeClick: false,
        closeBtn: false,
        openEffect: 'none',
        closeEffect: 'none',
        nextEffect: 'fade',
        prevEffect: 'fade',
        mouseWheel: false,
        theme: 'mb-video',
        arrows: arrows,
  			beforeShow: function(){
  				if(video && $(video.video_div).exists() ){
  					jwplayer(video.video_div).pause(true);
  				}
  			}
  		});
		}
  },
  
  resizeFancybox: function(inner_h){
    console.log('resizeFancybox');
		if ($('.fancybox-wrap').exists()) {
		  var delta = 50;
      //var wrap_margin = $('.fancybox-wrap').css('margin-top');
  		$('.fancybox-wrap,.fancybox-inner').height(inner_h + delta );
		}
	},

	constructFancyBoxTitle: function(item, is_image){
		var strVar="";
		strVar += "<div id=\"fancybox_info\">";
		strVar += "  <div class=\"image_details\">";
		strVar += "	<div class=\"buttons clearfix\">";
		strVar += "  <div class=\"close_button\"><\/div>";
    strVar += "	  <div class=\"inner_buttons\">";
		

		strVar += "	  <div class=\"addthis_toolbox addthis_default_style\"" +
											"addthis:url=\"" + $(item).attr("data-link")+ "\"" +
											"addthis:title=\""  + $(item).attr("data-title") + "\"" +
											"addthis:description=\"" + $(item).attr("data-description") + "\"" +
									">";
		strVar += "		<a class=\"addthis_button_compact\">";
		strVar += "		  <img src=\"\/assets\/images\/content\/tmp\/images\/share.png\">";
		strVar += "		<\/a>";
		strVar += "	  <div class=\"atclear\"><\/div><\/div>";
		strVar += "	  <a class=\"button\" href=\"" + $(item).attr('data-link') + " \" target=\"_top\">";
		strVar += 		"more info";
		strVar += "	  <\/a>";
		strVar += "	  <\/div>";
		
		
		strVar += "	<\/div>";
		strVar += "	  <div class=\"text\">";
		strVar += "	  <h2 class=\"title\">";
		strVar +=  $(item).attr("data-title");
		strVar += "	  <\/h2>";
		strVar += "	  <div class=\"description\">";
		strVar += $(item).attr("data-description");
		strVar += "	  <\/div>";
		strVar += "	<\/div>";

		strVar += "  <\/div>";
		strVar += "  <\/div>";
		return strVar;
	}
}
;
/* our stuff */








;
