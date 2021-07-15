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
