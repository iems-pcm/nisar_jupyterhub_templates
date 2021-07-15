/* 
*   grid_list_page
*
*   handles the filter bar and grid/list buttons
*
*/


var grid_list_page = {
  
  init: function () {
    this.initGridListButtons();
    this.initFilterBar();
  },
  
  initGridListButtons: function () {
    $('.nav_item.list_icon').click(function(){
			$(this).parents('section').removeClass('grid_view');
			$(this).parents('section').addClass('list_view');
		});

		$('.nav_item.grid_icon').click(function(){
			$(this).parents('section').removeClass('list_view');
			$(this).parents('section').addClass('grid_view');
		});
  },
  
  initFilterBar: function () {
    // Sticky Filter Bar
    if($('.filter_bar').exists()){
		  // Make filter bar sticky if it exists
			var filter_pos = $('.filter_bar').first().offset().top;
			var filter_height =  $('.filter_bar').first().outerHeight(true);
			$('.filter_bar_spanner').height(filter_height);
			$(window).scroll(function(){
				if ($(this).scrollTop() > filter_pos) {
					$('.filter_bar_spanner').first().show();
					$('.filter_bar').first().addClass('fixed');
				} else {
					$('.filter_bar').first().removeClass('fixed');
					$('.filter_bar_spanner').first().hide();
				}
			});
			
			// Handle expandable filter area on small screens only
  		mb_utils.touchclick('.filter_bar header', function(obj, event){
        if ($('.filter_bar .arrow_box').is(':visible')) {  
          $('.filter_bar .arrow_box').toggleClass("rotate_up");
          $('.section_search').toggle();
        }
      });
		}
  }
}

$(document).ready(function(){
	 grid_list_page.init();
});
