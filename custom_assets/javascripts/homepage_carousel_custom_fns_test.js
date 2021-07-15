// I went through and simplified some of this by restoring some defaults, which I decided I prefer. -JM


var homepage_slider = {
	windowWidth: null,
	widthOfRectangles: null,
	windowHeight: null,
	left_rect: null,
	right_rect: null,
	homepage_slider_options:  {
		width: null,    // slider standard width
		height: null,   // slider standard height
		layout:' fullscreen',
		space: 0,
		autoplay: false,
		speed: 30,
		center: true,
		//centerControls: true,
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
		// homepage_slider.slider.control('bullets',{autohide: false});
		homepage_slider.slider.control('bullets');
		homepage_slider.slider.setup('masterslider' , homepage_slider.homepage_slider_options);
		homepage_slider.initListeners();
	},

	initWidths: function(){
		homepage_slider.windowWidth = $(window).width();
		homepage_slider.widthOfRectangles = homepage_slider.windowWidth / 5;
		homepage_slider.windowHeight = $(window).height();

    // Using the default to handle this now -JM
    
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
			
			// Using the default to handle this now -JM
			// if( slide_idx == 0){
			//         $('.ms-nav-prev').css("opacity", 0)
			//       } else if (slide_idx + 1 == homepage_slider.slider.api.count()){
			//         $('.ms-nav-next').css("opacity", 0)
			//       } else {
			//         // do nothing
			//       }

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

		});

    // Using the default to handle this now -JM
		// $(window).mousemove(function(e){
		//      main.mousePos.x = e.pageX;
		//      main.mousePos.y = e.pageY;
		//      if(homepage_slider.pointRectangleIntersection(main.mousePos, homepage_slider.left_rect) && homepage_slider.slider.api.index() != 0){
		//        $('.ms-nav-prev').css("opacity", 1)
		//      } else if (homepage_slider.pointRectangleIntersection(main.mousePos, homepage_slider.right_rect) && homepage_slider.slider.api.index() + 1 < homepage_slider.slider.api.count()){
		//        $('.ms-nav-next').css("opacity", 1)
		//      } else {
		//        $('.ms-nav-next, .ms-nav-prev').css("opacity", 0)
		//      }
		//    });

		homepage_slider.slider.api.addEventListener(MSSliderEvent.RESIZE , function(){
		
  		//  Does this not work, Russ? -JM
      //	var w = $('.ms-container').parent().width();
      //	$('.ms-container').css("max-width", w);

  		homepage_slider.windowWidth = $(window).width();
  		      homepage_slider.windowHeight = $(window).height();
		
  		// Using the default to handle this now -JM
  		homepage_slider.widthOfRectangles = homepage_slider.windowWidth / 5;
  		      homepage_slider.left_rect = {x1:0, y1: 0, x2:  homepage_slider.widthOfRectangles, y2: homepage_slider.windowHeight}
  		      homepage_slider.right_rect = {x1: homepage_slider.windowWidth - homepage_slider.widthOfRectangles, y1: 0, x2: homepage_slider.windowWidth, y2: homepage_slider.windowHeight}
  		


  		//homepage_slider.homepage_slider_options.width = homepage_slider.windowWidth;
  		//homepage_slider.homepage_slider_options.height = homepage_slider.windowHeight;

		});
	},
  
  //Using the default to handle this now -JM
   pointRectangleIntersection: function(p, r) {
    return p.x > r.x1 && p.x < r.x2 && p.y > r.y1 && p.y < r.y2;
   }

}
$(function() {
	homepage_slider.init();
});
