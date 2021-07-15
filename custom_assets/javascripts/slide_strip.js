var slide_strips = {
	$next: null,
	$prev: null,
	idxs: {
		"news" : 0,
		"videos": 0,
		"images": 0,
		"featured": 0
	},
	spinner: null,
	options: {
		lazyLoad: true,
		responsiveMode : 'itemWidthRange',
		itemWidthRange : [230, 380], //will keep item's width between x and y px and will calc how many items to show
		pagination: true,   //shows navigation dots when pages present
		scrollPerPage: true,
		rewind: false,
		indexChanged : function(index) {
			slide_strips.disableButtons(index);
			slide_strips.setIndex(index)
		},
		afterInit: function(){
			if(!$('html.ie8').exists()){
				slide_strips.spinner.spin(false);
			}
			$('.slide_strips').css("visibility", "visible");
			slide_strips.setScrollForMobile();
		},
		beforeInit: function(){
			if(!$('html.ie8').exists()){
				slide_strips.spinner = $('.loading').first().spin(main.spinner_opts)
			}
		}
	},

	init: function(){
		slide_strips.$prev = $(".slide_strips .slide_nav .prev_btn");
		slide_strips.$next = $(".slide_strips .slide_nav .next_btn");
		slide_strips.initListeners();
	},



	initListeners: function(){
		slide_strips.$prev.click(function(){
			var utilCarouselObj = slide_strips.getVisibleSlideStrip();
			utilCarouselObj.prev();
		});

		slide_strips.$next.click(function(){
			var utilCarouselObj = slide_strips.getVisibleSlideStrip();
			utilCarouselObj.next();
		});

		$(window).on('resize', function(){
			 slide_strips.setScrollForMobile();
		});

		$(".section_selector a").click(function(e){
			e.preventDefault();
			var clicked = this;
			if(!$(clicked).hasClass('current')){
				var nextSlideStripSelector = $(clicked).attr('class').trim();
				slide_strips.changeMoreButton(nextSlideStripSelector);
				$(".section_selector a.current").removeClass("current");
				$(clicked).addClass('current'); //add current to a
//				slide_strips.setHeader(nextSlideStripSelector.toUpperCase());
				//fade out current
//				console.log("fade out:" +	$(".slide_strip.current").parent().attr('class') );

				$(".slide_strip.current").parent().children().animate({"opacity": "0"},function(){
					$(this).css("visiblity","hidden");
					$(".slide_strip.current").removeClass("current"); //remove current from slide_strip
//					console.log("fade in:" +nextSlideStripSelector );
					//$('section.'+ nextSlideStripSelector).css("opacity", 1.0);
					$('section.'+ nextSlideStripSelector).children().animate({"opacity": "1"}, function(){
						$(this).css("visiblity","visible");
					});
					
					
					$('section.'+ nextSlideStripSelector + " .slide_strip").addClass("current"); //add current to new slide_strip
					var idx = slide_strips.getVisibleSlideStrip().pageIndexs[slide_strips.getVisibleSlideStrip().pageIndexs.length - 1];
					slide_strips.disableButtons(slide_strips.getCurrentIndex());
					slide_strips.setScrollForMobile();
				});
			}
		});
	},

	changeMoreButton: function(nextStrip){
		var href, text;
		switch(true){
			case /featured/.test(nextStrip):
			case /news/.test(nextStrip):
				href = "/news";
				text = "news";
				break;
			case /videos/.test(nextStrip):
				href = "/video";
				text = "videos";
				break;
			case /images/.test(nextStrip):
				href = "/spaceimages";
				text = "images";
				break;
			default:
				href = "";
				text = "";
				console.log("ERROR: slide_strips.changeMoreButton did not match case: " + nextStrip);
				break;
		}

		$('#slidestrip_more').attr('href', href)
		$('#slidestrip_more .button_text').text(text)

	},

	disableButtons: function(index){
//		console.log("index: " + index)
		if (index == 0){
			slide_strips.$prev.addClass("disabled")
		} else {
			slide_strips.$prev.removeClass("disabled")
		}

		if (index >= slide_strips.getVisibleSlideStrip().pageIndexs[slide_strips.getVisibleSlideStrip().pageIndexs.length - 1]){
			slide_strips.$next.addClass("disabled")
		} else {
			slide_strips.$next.removeClass("disabled")
		}
	},

	setScrollForMobile: function(){
		if($(window).width() < 480){
			var utilCarouselObj = slide_strips.getVisibleSlideStrip();
			if(utilCarouselObj){
				utilCarouselObj.options.scrollPerPage = false;
			}
		} else {
			var utilCarouselObj = slide_strips.getVisibleSlideStrip();
			if(utilCarouselObj){
				utilCarouselObj.options.scrollPerPage = true;
			}
		}
	},

	setHeader: function(text){
		$('.slide_strips header .module_title_small').text(text)
	},

	getVisibleSlideStrip: function(){
		return $('.slide_strips section .slide_strip.current').data('utilCarousel');
	},

	setIndex: function(index){
		var currentStrip = $('.slide_strips section .slide_strip.current').attr("id");
		slide_strips.idxs[currentStrip] = index;
	},

	getCurrentIndex: function(){
		var currentStrip = $('.slide_strips section .slide_strip.current').attr("id");
		return slide_strips.idxs[currentStrip];
	}
}
;
