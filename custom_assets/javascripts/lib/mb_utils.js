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
