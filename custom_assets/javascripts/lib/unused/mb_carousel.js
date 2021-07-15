/* ----- carousel ----- */
/* if the swiping is jerky check to make sure the transform is getting set on the itemContainer
 *   i.e. .carousel_items { -webkit-transform: translate3d(0px,0px,0px); }
  * - RK
  * */


var carousel = {
	navButtons: null,
	maxItems: null,
	prev: null,
	next: null,
	playing: false,
	playSpeed: 6000, //in ms
	init: function ( swipeArea, itemContainer, itemToSwipe, excludedElements,nav_buttons, prev, next, autoplay) {
		carousel.navButtons = nav_buttons;
		carousel.maxItems = $(itemToSwipe).length;
		carousel.prev = prev;
		carousel.next = next;
		mb_swipe.init( swipeArea, itemContainer,itemToSwipe,carousel.maxItems, excludedElements, carousel.setNavAndPause);
		var item = mb_utils.getParam('item');
		if (item){
			mb_swipe.goToItemImmediately(parseInt(item) - 1);
		}

		var item_id = mb_utils.getParam('item_id');
		if (item_id){
			carousel.gotoItemById(item_id);
		}
		if (autoplay){
			this.startPlaying()
		}
		this.initListeners(nav_buttons, prev, next);
		carousel._disable_buttons(carousel.maxItems, mb_swipe.currentItemNum);
	},

	setNav: function(i){
		$(carousel.navButtons[i]).parent().find('.active').removeClass("active");
		$(carousel.navButtons[i]).addClass("active");
		carousel._disable_buttons();
	},

	setNavAndPause: function(i){
		carousel.setNav(i);
		carousel.pause();
	},

	gotoItemById: function(id){
		var idx = $('#carousel_item_'+id).index();
		if(idx){
			mb_swipe.goToItemImmediately(idx);
		}
	},

	startPlaying: function(){
		carousel.playing = true;
		window.setTimeout(carousel.play,carousel.playSpeed);
	},

	play: function(){
		if (carousel.playing){
			window.setTimeout(carousel.play,carousel.playSpeed);
			if(mb_swipe.currentItemNum == (mb_swipe.maxItems - 1)){
				mb_swipe.currentItemNum = 0;
			} else{
				mb_swipe.currentItemNum = mb_swipe.currentItemNum+1;
			}
			mb_swipe.slideToCurrentItem();
			carousel.setNav(mb_swipe.currentItemNum);
		}
	},

	pause: function(){
		carousel.playing = false;
	},

	initListeners: function (nav_buttons, prev, next) {
		nav_buttons.each(function(i) {
			$(this).click(function(){
				mb_swipe.jumpToItem(i);
			});
		});

		prev.click(function(){
			mb_swipe.previousItem();
		});

		next.click(function(){
			mb_swipe.nextItem();
		});
	},

	_disable_buttons: function(){
//		console.log("disable? currentItem" + currentItem + ", maxItems: " + maxItems);
		if(mb_swipe.currentItemNum + 1 == mb_swipe.maxItems){
			$(carousel.next).addClass("disable");
			$(carousel.prev).removeClass("disable");
		} else if (mb_swipe.currentItemNum == 0){
			$(carousel.prev).addClass("disable");
			$( carousel.next).removeClass("disable");
		} else {
			$( carousel.next).removeClass("disable");
			$(carousel.prev).removeClass("disable");
		}
	}
};


/* ----- end main ----- */
;
