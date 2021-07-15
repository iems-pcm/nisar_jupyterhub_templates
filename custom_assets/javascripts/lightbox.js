/* 
*   lightbox
*
*   This is lightbox for things like images and videos
*   Used on grid/list pages, but could be used elsewhere in future
*
*/


var lightbox = {
  
  init: function () {
    this.initFancybox();
  },
  
  initFancybox: function () {
    
    // only init if it is being used
    if ($('.fancybox').exists()) {
		  $(".fancybox").fancybox({
  			openEffect	: 'none',
  			closeEffect	: 'none',
  			closeBtn : false,
  			mouseWheel: false,
  			//maxWidth: $(window).width() - 165,
  			//maxHeight: $(window).height(),
  			fitToView: false,
  			width: '100%',
  			height: '100%',
  			autoSize: false,
  			theme: 'mb-info',
  			beforeLoad: function(){
  				this.title = lightbox.constructFancyBoxTitle(this.element, true)
  			},
  			afterShow: function(){
  				$('.close_button').click(function(){
  					parent.$.fancybox.close();
  					if(typeof _atw != "undefined"){
  						_atw.clb(); //close addthis popup
  					}
  				});
  				if(typeof addthis != "undefined"){
  					addthis.toolbox(
  							$(".addthis_toolbox").get()
  					);
  				}
  			},
  			padding : 0
  		});
		}

    if ($('.fancybox_video').exists()) {
  		var video_w, margin, arrows, video_h;
  		if (isMobile.any()){
  			//video_w = $(window).width() + 20;
  			//margin = [20, 20, 20, 20];
  			arrows = false;
  			//video_h = $(window).height();
  		} else {
  			//video_w = $(window).width() - 165;
  			//margin = [30, 55, 30, 55];
  			arrows = true;
  			//video_h = $(window).height() - 60;
  		}
  		$("a.fancybox_video").fancybox({
  			//minWidth: video_w,
        //minHeight: video_h,
        fitToView: false,
        autoscale: false,
        //margin: margin,
        //width: video_w,
        //height: video_h,
        autoSize: false,
        closeClick: false,
        closeBtn: false,
        openEffect: 'none',
        closeEffect: 'none',
        nextEffect: 'fade',
        prevEffect: 'fade',
        mouseWheel: false,
        theme: 'mb-video',
        arrows: arrows,
  			beforeShow: function(){
  				if(video && $(video.video_div).exists() ){
  					jwplayer(video.video_div).pause(true);
  				}
  			}
  		});
		}
  },
  
  resizeFancybox: function(inner_h){
    console.log('resizeFancybox');
		if ($('.fancybox-wrap').exists()) {
		  var delta = 50;
      //var wrap_margin = $('.fancybox-wrap').css('margin-top');
  		$('.fancybox-wrap,.fancybox-inner').height(inner_h + delta );
		}
	},

	constructFancyBoxTitle: function(item, is_image){
		var strVar="";
		strVar += "<div id=\"fancybox_info\">";
		strVar += "  <div class=\"image_details\">";
		strVar += "	<div class=\"buttons clearfix\">";
		strVar += "  <div class=\"close_button\"><\/div>";
    strVar += "	  <div class=\"inner_buttons\">";
		

		strVar += "	  <div class=\"addthis_toolbox addthis_default_style\"" +
											"addthis:url=\"" + $(item).attr("data-link")+ "\"" +
											"addthis:title=\""  + $(item).attr("data-title") + "\"" +
											"addthis:description=\"" + $(item).attr("data-description") + "\"" +
									">";
		strVar += "		<a class=\"addthis_button_compact\">";
		strVar += "		  <img src=\"\/assets\/images\/content\/tmp\/images\/share.png\">";
		strVar += "		<\/a>";
		strVar += "	  <div class=\"atclear\"><\/div><\/div>";
		strVar += "	  <a class=\"button\" href=\"" + $(item).attr('data-link') + " \" target=\"_top\">";
		strVar += 		"more info";
		strVar += "	  <\/a>";
		strVar += "	  <\/div>";
		
		
		strVar += "	<\/div>";
		strVar += "	  <div class=\"text\">";
		strVar += "	  <h2 class=\"title\">";
		strVar +=  $(item).attr("data-title");
		strVar += "	  <\/h2>";
		strVar += "	  <div class=\"description\">";
		strVar += $(item).attr("data-description");
		strVar += "	  <\/div>";
		strVar += "	<\/div>";

		strVar += "  <\/div>";
		strVar += "  <\/div>";
		return strVar;
	}
}
;
