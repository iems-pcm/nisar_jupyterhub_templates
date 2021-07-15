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



