/* 
*   util_carousel 
*
*   Carousels that have multiple items visible at a time
*
*/


var util_carousel = {
  
  setScrollForMobile: function(utilCarouselObj){
 		if($(window).width() < 480){
 			//var utilCarouselObj = slide_strips.getVisibleSlideStrip();
 			if(utilCarouselObj){
 				utilCarouselObj.options.scrollPerPage = false;
 			}
 		} else {
 			//var utilCarouselObj = slide_strips.getVisibleSlideStrip();
 			if(utilCarouselObj){
 				utilCarouselObj.options.scrollPerPage = true;
 			}
 		}
 	}
}
;
