/*
 * VIEWMASTER
 * 
 * A horizontally scrolling interface with mouse and next/prev button support
 * Optional hideability based on any clickable element
 *
 * TODO: make buttons optional, and maybe not graphical
 * Maybe strategize the fallback to remove buttons when no JQuery is here.
 *
 * USAGE:
 *   set_viewmaster.init();  // or set_viewmaster.init(3, 100);
 *   set_viewmaster.toggleVisibilityWith(".nav-tab"); // optional
 *
 */

// This will likely end up under GIAKIDS.EDU.lib.viewmaster or similar
var set_viewmaster = {
  /* only edit these top two */
  scroll_speed: 800,
  num_items_to_scroll: 4,

  starting_scroll_position: 0,
  scroll_left_stop: 0,

  scroll_right_stop: null,
  amount_to_scroll: null,
  slide_width: null,
  num_slides: null,
  total_width: null,

  init: function ( num_items_to_scroll, scroll_speed ) {
		console.log("init set_viewmaster")
    if (scroll_speed != undefined) { this.scroll_speed = scroll_speed; }
    if (num_items_to_scroll != undefined) { this.num_items_to_scroll = num_items_to_scroll; }

    this.slide_width = $('.set_view_master .slides .slide:first').outerWidth(true);
    this.amount_to_scroll = this.num_items_to_scroll * this.slide_width; // scroll per slide_width
    this.num_slides = $('.set_view_master .slide').length;
    this.total_width = this.slide_width * this.num_slides;

    // set size and scroll stopping point
    $('.set_view_master .slides').css('width', this.total_width);
    this.scroll_right_stop = this.scroll_left_stop + this.total_width - this.amount_to_scroll;

    // init listeners on next/prev    
    this.initPrevNextListeners();
  },
  
  toggleVisibilityWith: function(toggler) {
//    console.log('setting toggle with ' + $('#mini-explorer-tab').attr('id'));
    if (toggler != undefined && $(toggler).length > 0) { 
      $(toggler).click(function () {
				$(toggler).toggleClass("invert");
        $(".set_view_master_container").parent().slideToggle(); // display the viewmaster (or hide)
      });
    }
  },

  initPrevNextListeners: function () {
		$('.set_view_master_nav.prev_btn').click(function() {
			console.log("clicked prev")
			var target_position = $('.set_view_master').scrollLeft() - set_viewmaster.amount_to_scroll;
      if (target_position < set_viewmaster.scroll_left_stop) {
        target_position = set_viewmaster.scroll_left_stop; // scroll to end
      }
      $('.set_view_master').animate({scrollLeft: target_position}, set_viewmaster.scroll_speed);
    });

    $('.set_view_master_nav.next_btn').click(function() {
			console.log("clicked next")
      var target_position = $('.set_view_master').scrollLeft() + set_viewmaster.amount_to_scroll;
      if (target_position > set_viewmaster.scroll_right_stop) {
        target_position = set_viewmaster.scroll_right_stop; // scroll to end
      }      
      $('.set_view_master').animate({scrollLeft: target_position}, set_viewmaster.scroll_speed);
    });
  }

}

$(document).ready(function() {
	set_viewmaster.init();
});
