/* 
*   home_page
*
*   Functionality for home page only
*
*/


var home_page = {
  
  init: function () {
    this.initListeners();
    this.initParallax();
    slide_strips.init();
  },
  
  initListeners: function () {
    
    // Scroll Down prompt/button
    $('a#site_nav_down').click(function(event){
			event.preventDefault();
			$('html,body').animate({
				scrollTop: $('.scrollblock').first().offset().top - 100
			}, 600)
		});
		$('.site_nav_down_prompt').click(function(event){
			event.preventDefault();
			$('html,body').animate({
				scrollTop: $('.scrollblock').first().offset().top - 100
			}, 600)
		});
		$(window).scroll(function(){
  	  if ($(window).scrollTop() > 30) {
  	    $('.site_nav_down_prompt').addClass('hide');
  	  } else { 
  	    $('.site_nav_down_prompt').removeClass('hide');
  	  }
		});
  },
  
  initParallax: function () {
		if (!isMobile.any()){
		  
		  // If we are not on a mobile device, run the parallax stuff

		  // Set a variable to determine which browsers we want to exclude from parallax effect
		  var ie_version =  mb_utils.getIEVersion();
		  var excludedDesktopBrowsers = ie_version.major >= 8;
		  //var excludedDesktopBrowsers = true; // For testing non-parallax on all browsers
		  
		  // Add a '.parallax' class to the missions teaser if the browser will handle it for styling
			if (!excludedDesktopBrowsers) {
			  $('.missions_teaser').addClass('parallax');
			}
			
			// Run the imageScroll function.
			// For an excluded browser, this should only convert the data-image to an image.
			if ($('#featured_image').exists()) {
  			$('#featured_image').imageScroll({
  				container: $('.media_feature').first(),
  				holderMinHeight: 800,
  				parallax: !excludedDesktopBrowsers
  			});
		  } 
			
			if ($('#missions_image').exists()) {
  			$('#missions_image').imageScroll({
  				container: $('.missions_teaser'),
  				holderMinHeight: 960,
  				parallax: !excludedDesktopBrowsers
  			});
			}
			
      // Set parallax on the home page feature carousel
      // Setting the scroll on .scrollblock shifts the entire area below the carousel
      // We are only doing parallax on non-IE desktop browsers -JM
			if ($('.scrollblock').length > 0 && !excludedDesktopBrowsers){
				$(window).scroll(function(){
					var s = $(window).scrollTop();
					if (s < $('.scrollblock').first().position().top){
						$('.primary_media_feature').css("transform", "translateY(" + (s/2) + "px)");
					}
				});
			}
			
		} else {
		  
		  // If we are on mobile, append the data-image as an image
		  
		  // This happens on mobile -JM
		  // REFACTOR! -JM
			var featured_image_9x16 = $('#featured_image').attr('data-mobile-image');
			var featured_image_16x9 = $('#featured_image').attr('data-image');
			var missions_image_9x16 = $('#missions_image').attr('data-mobile-image');
			var missions_image_16x9 = $('#missions_image').attr('data-image');
			$('#featured_image').siblings('.window').addClass('mobile');
			$('#missions_image').siblings('.window').addClass('mobile');
			var picture_el = '<picture>' +
     '<source srcset="'+featured_image_16x9+'"media="(min-width: 600px)">' +
     '<source srcset="'+featured_image_9x16+'"/>' +
     '<img src="'+featured_image_9x16+'">' +
     '</picture>'
	    var picture_el_missions = '<picture>' +
			'<source srcset="'+missions_image_16x9+'"media="(min-width: 600px)">' +
			'<source srcset="'+missions_image_9x16+'"/>' +
			'<img src="'+missions_image_9x16+'">' +
			'</picture>'
			$('#featured_image').append(picture_el);
			$('#missions_image').append(picture_el_missions);
		}
  }
}

$(document).ready(function(){
	 home_page.init();
});
