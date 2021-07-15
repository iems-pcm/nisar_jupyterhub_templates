var video = {
	video_div: "",


	/*video_div should be non #'d string i.e. for <div id="test"> = "test"

	file_objs should be an array of multiple "file" objects with strings i.e.
	 { file: '/videos/video.mp4' },
	 { file: '/videos/video.ogv' },
	 { file: '/videos/video.webm' }

	 autostart should be true or false

	 index_page just does special stuff for the indexpage vs the detail
	 */
	init: function(video_div, file_objs, autostart, index_page, poster_img){
		this.video_div = video_div;
		jwplayer.key="v42kiq3jB7eL3J520/m3JUHotAg/WXAzPcYeNw==";

		jwplayer(video.video_div).setup({
//			stretching: "fill",  //remove to remove black bars on left/right due to aspect ratio but lose data from top/bottom or left right depending
			flashplayer:'/assets/javascripts/vendor/jwplayer/jwplayer.flash.swf',
			levels: file_objs,
			width: "100%",
			image: poster_img,
//			height: $(".single.primary_media_feature").height(), //remove and add aspectratio: "4:3" to have responsive behavior
			autostart: autostart,
			aspectratio: "16:9",
			skin: "/assets/javascripts/vendor/jwplayer/mb_skin/mb_skin.xml",
			'modes': [
				{type: 'html5'},
				{type: 'flash'},
				{type: 'download'}
			]
		});

		this.initListeners(index_page)
	},

	initListeners: function(index_page){
		if(index_page){
			$(".play").click(function(){
				video.play();
			});
			jwplayer(video.video_div).setControls(false); //so that video play button doesnt show up until after video is playing. controls set to true when our play div clicked
			jwplayer(video.video_div).onReady(video.showPlayButton)
			jwplayer(video.video_div).onSetupError(function(){ console.log("Error setting up video")});
		} else {
			jwplayer(video.video_div).onReady(video.resizeFancybox);
			$( window ).resize(function() {
  		  video.resizeFancybox();
  	  });
		}
	},

	resizeFancybox: function(){
		var video_h = $(".player").width() * 9/16;
		var player_h = $(".player").height();
		var h = Math.max(video_h, player_h);
		var detail_h = $('.image_details').first().height();
		console.log("video_h:" + h + ", detail_h:" + detail_h);
		parent.lightbox.resizeFancybox(h + detail_h );
	},

	showPlayButton: function(){
		$(".play").show();
	},

	play: function(){
		$(".play").hide();
		jwplayer(video.video_div).play();
		$(".single.primary_media_feature .carousel_item").fadeOut(1000, function(){
			$('.player').css("position", "relative");
		});
		jwplayer(video.video_div).setControls(true);
	}

}
;
