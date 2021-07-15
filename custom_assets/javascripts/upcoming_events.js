var events = {
	$events_carousel: null,
	$events_prev: null,
	$events_next: null,

	init: function(){

		$(".events").utilCarousel({
			responsiveMode : 'itemWidthRange',
			itemWidthRange : [230, 380],    //will keep item's width between x and y px and will calc how many items to show
			pagination: true,   //shows navigation dots when pages present but seems necessary for the next/prev page
			scrollPerPage: true,
			rewind: false,
			indexChanged : function(index) {
				if (index == 0){
					events.$events_prev.addClass("disabled")
				} else {
					events.$events_prev.removeClass("disabled")
				}

				if (index >= events.$events_carousel.pageIndexs[events.$events_carousel.pageIndexs.length - 1]){
						events.$events_next.addClass("disabled")
				} else {
						events.$events_next.removeClass("disabled")
				}
			}
		});
		events.$events_prev = $(".events_teaser .slide_nav .prev_btn");
		events.$events_next = $(".events_teaser .slide_nav .next_btn")
		events.$events_carousel = $('.events_teaser .events').data('utilCarousel');


		events.initListeners();
		},

	initListeners: function(){
		events.$events_prev.click(function(){
			events.$events_carousel.prev();
		});

		events.$events_next.click(function(){
			events.$events_carousel.next();
		});
	}

};

$(document).ready(function(){
	 events.init();
});

