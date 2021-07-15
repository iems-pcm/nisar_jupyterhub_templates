/* 
*   nav
*
*   This is the nav overlay
*
*/


var nav = {
  
  init: function () {
    this.initListeners();
  },
  
  initListeners: function () {
    $('a.modal_close').click(function(event){
			event.preventDefault();
			$('.main_nav_overlay').fadeOut(400);
		});
  }
}
;
