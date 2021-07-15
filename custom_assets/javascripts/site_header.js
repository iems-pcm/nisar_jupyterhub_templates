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
