// This handles "infinite scrolling for thumbnail grid layouts 

/* -- ON READY -- */
 

$(function() { 
  initThumbs();
  initInfiniteScroll();  
});
  
/* -- end ON READY -- */      



/* -- INIT -- */  

function initInfiniteScroll() 
{
  var $container = $('#thumb_grid');
	$container.infinitescroll({
		navSelector  : '#page-nav',    // selector for the paged navigation 
		nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
		itemSelector : '.thumb_entry',     // selector for all items you'll retrieve
		extraScrollPx: 120,
		loading: {
			msgText: '',
			finishedMsg: ''
		} 
	},
    function(arrayOfNewElems){
      $('.star', this).rating();
      $('.star', this).css('visibility', 'visible');
    });
}

function initThumbs () 
{
  $('div.thumb_entry_img_container img').each(function(index) { 
    $(this).imagesLoaded( function(){ 
      setThumbSize(this);
    }); 
  });
}
 
/* -- end INIT -- */   

 

function setThumbSize ( target )
{
  // Set the correct size for the thumb      
  var containerH =  $('div.thumb_entry_img_container').height();    
  var imgH = $(target).height();   
  if (imgH < containerH) $(target).css({'height': '120px', 'width': 'auto'});                                         
}
;
