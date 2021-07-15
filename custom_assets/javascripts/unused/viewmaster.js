/*
 * VIEWMASTER
 * 
 * A horizontally scrolling interface with mouse and next/prev button support
 * Using smoothDivScroll plugin
 *
 * USAGE:
 *   mb_viewmaster.init();  // or mb_viewmaster.init(3, 100);
 *   mb_viewmaster.toggleVisibilityWith(".nav-tab"); // optional
 *
 */


// This will likely end up under GIAKIDS.EDU.lib.viewmaster or similar
var mb_viewmaster = {
  
  viewMaster: '.view_master',

  init: function (toggler) {
     mb_viewmaster.toggleVisibilityWith(toggler);
     mb_viewmaster.initSmoothDivScroll();
  },
  
  toggleVisibilityWith: function(toggler) {
    
    // display the viewmaster (or hide)
    
    var togglerExists = $(toggler).length;
    
    if (togglerExists) { 
      $(toggler).click(function () {
				$(toggler).toggleClass("invert");
				if (isMobile.any()) {
				  $(".view_master_container").parent().toggle();
          mb_viewmaster.toggleAutoScrolling();
        } else {
          $(".view_master_container").parent().slideToggle(function () {
            mb_viewmaster.toggleAutoScrolling();
          });
        }
      });
    }
  },
  
  initSmoothDivScroll: function () {
		
		/* Providing a fallback solution for Android to allow clickthrough -JM */
		
		if (!isMobile.Android()) {
    
  		// We don't want touchscreens getting the hotspots because they swipe
  		var hotSpotScrollingParam = true;

  		if (isMobile.any()) {
   		  hotSpotScrollingParam = false;
   		}
 		
  		$(this.viewMaster).smoothDivScroll({
   			hotSpotScrolling: hotSpotScrollingParam,
        touchScrolling: true,
        manualContinuousScrolling: true,
        mousewheelScrolling: false,
        //autoScrollingMode: "onStart",
        autoScrollingInterval: 50,
        setupComplete: function() {
          $(".view_master_container").parent().addClass('isReady');
          $("#mini-explorer").addClass('isReady');
        }
   		});
 		} else {
      $(this.viewMaster).parent().addClass('fallback');
      $(".view_master_container").parent().addClass('isReady');
      $("#mini-explorer").addClass('isReady');
    }
 		
  },
  
  toggleAutoScrolling: function () {
    /* Providing a fallback solution for Android to allow clickthrough -JM */
    if (!isMobile.Android()) {
      if ($(".view_master_container").is(':visible')) {
        $(".view_master").smoothDivScroll("startAutoScrolling");
      } else {
        $(".view_master").smoothDivScroll("stopAutoScrolling");
      }
    }
  }
};


$(function(){
  var toggler = "#mini-explorer-tab";
  var togglerExists = $(toggler).length;
  if (togglerExists) {
    mb_viewmaster.init(toggler); 
  } 
});


