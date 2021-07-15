var homepage_slider = {
	windowWidth: null,
	widthOfRectangles: null,
	windowHeight: null,
	left_rect: null,
	right_rect: null,
	ie_8_checked: false,
	homepage_slider_options:  {
		width: null,  // slider standard width
		height:null,  // slider standard height
		layout:'fullscreen',
		space: 0,
		autoplay: true,
		overPause: false,
		endPause: false,
		speed: 30,
		mouse: false,
		center: true,
		centerControls: true,
		instantStartLayers: true, //disable to allow for layer transitions
		loop: true
	},

	init: function(){
		homepage_slider.slider = new MasterSlider();
		homepage_slider.initWidths();
		// adds Arrows navigation control to the slider.
		//homepage_slider.slider.control('arrows', {autohide: false, dontFade: true});
		homepage_slider.slider.control('arrows');
		//slider.control('timebar' , {insertTo:'#masterslider'});
		//homepage_slider.slider.control('bullets',{autohide: false});
		homepage_slider.slider.control('bullets');
		homepage_slider.slider.setup('masterslider' , homepage_slider.homepage_slider_options);
		homepage_slider.initListeners();
	},

	initWidths: function(){
		homepage_slider.windowWidth = $(window).width();
		homepage_slider.widthOfRectangles = homepage_slider.windowWidth / 5;
		homepage_slider.windowHeight = $(window).height();

		// Rectangle is defined by diagonal points 1 & 2 as  (x1,y1) and x2, y2
		homepage_slider.left_rect = {x1:0, y1: 0, x2:  homepage_slider.widthOfRectangles, y2: homepage_slider.windowHeight};
		homepage_slider.right_rect = {x1: homepage_slider.windowWidth - homepage_slider.widthOfRectangles, y1: 0, x2: homepage_slider.windowWidth, y2: homepage_slider.windowHeight};

		homepage_slider.homepage_slider_options.width = homepage_slider.windowWidth;
		homepage_slider.homepage_slider_options.height = homepage_slider.windowHeight;
	},

	initListeners: function(){
		homepage_slider.slider.api.addEventListener(MSSliderEvent.CHANGE_START , function(){
			//console.log("change start: " + homepage_slider.api.index() );
			var slide_idx = homepage_slider.slider.api.index()

			var $slide = $('.slide-' + (slide_idx + 1)).first()
			
			$('body').removeClass('dark_background no_background light_background');

			if ($slide.hasClass("light_background")){
				$('body').addClass('light_background');
			} else
			if ($slide.hasClass("no_background")){
				$('body').addClass('no_background');
			} else {
			  $('body').addClass('dark_background');
			}
			
			$('.ms-bullet').click(function(){
  		  console.log('click bullet');
  		  homepage_slider.slider.api.pause(); 
  		});

  		$('.ms-nav-prev').click(function(){
  		  console.log('click previous');
  		  homepage_slider.slider.api.pause(); 
  		});

  		$('.ms-nav-next').click(function(){
  		  console.log('click next');
  		  homepage_slider.slider.api.pause();    
  		});

			//hide play youtube play button on mobile
			if (isMobile.any()){
				$('.ms-slide-vpbtn').attr("style", "display: none!important;")
			}

			//ie8 puts the source element above all the slides and introduces a black bar on the side until resize.
			if(!homepage_slider.ie_8_checked){
				homepage_slider.ie_8_checked = true;
				if ($('.ie8').exists()){
					if($('.master-slider source').length > 0){
						console.log("source bad for ie8");
						$('.master-slider').first().prepend($('.master-slider .ms-container'));
					}
				}
			}

		});
		
		
		
		homepage_slider.slider.api.addEventListener(MSViewEvents.SWIPE_END , function(){
		  console.log('swipe end');
		  homepage_slider.slider.api.pause();
		});

		homepage_slider.slider.api.addEventListener(MSSliderEvent.RESIZE , function(){
		  homepage_slider.windowWidth = $(window).width();
  		homepage_slider.widthOfRectangles = homepage_slider.windowWidth / 5;
  		homepage_slider.windowHeight = $(window).height();
  		homepage_slider.left_rect = {
  		  x1:0, y1: 0, x2:  homepage_slider.widthOfRectangles, y2: homepage_slider.windowHeight
  		}
  		homepage_slider.right_rect = {
  		  x1: homepage_slider.windowWidth - homepage_slider.widthOfRectangles, y1: 0, x2: homepage_slider.windowWidth, y2: homepage_slider.windowHeight
  		}

      //var w = homepage_slider.windowWidth
      //$('.ms-container').css("max-width", w);
      
      // Make sure the container is the full width to allow correct positioning of UI elements.
      // This appears to working now that I've also updated the left positions of certain containers, but I've not tested on all browsers. -JM
      var w = $('.ms-container').parent().width();
      $('.ms-container').css("max-width", w);
      $('.ms-slide-layers').css("max-width", w);
      $('.ms-view').css('left','0');
      $('.ms-slide-layers').css('left','0');
      
      
		});
	},

	pointRectangleIntersection: function(p, r) {
		return p.x > r.x1 && p.x < r.x2 && p.y > r.y1 && p.y < r.y2;
	}

}
$(function() {
	homepage_slider.init();
});
