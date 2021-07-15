/* ---------------------- mb_nav.js  ------------------------------ */

/* ----- nav ----- */

// bergen: make body a variable

var mb_nav = {

  /* Set class variables for responsive nav */
  menuBtn: '.menu_button',
  expandingMobileMenuContainer: '#expanding-mobile-menu-container',
  expandingMenuContainer: '.expanding_mobile_menu',
  navContainer: '#global_nav_container',
  subnavContainer: '.global_subnav_container',
  globalNav: '#global_nav',
  nav: '#nav',
  arrowBtn: '#global_nav .arrow_box',
  subnav: '.subnav',
  navHeightOffset: 18, /* For setting mobile nav height when expanded -JM */
  
  /* Set defaults for mb_nav 
       BERGEN: if this is a < ie9 browser, defaultNavTopPos is always -1
  */
  defaultNavTopPos: -1,
  navHeight: 0,
  subnavHeight: 0,
  subnavPaddingBottom: 18,

  init: function(overrides) { 
    if (typeof overrides !== 'undefined') {
      for(var key in overrides) {
        mb_nav[key] = overrides[key];
      }
    }
    this._addNavArrows();  
    this._setDefaultStyles();
    this._initListeners();
    
    $(mb_nav.globalNavContainer).css('opacity', 1); // Starts off 0 opacity to avoid FOUC -JM
  },
    
  _initListeners: function() {

    // Mobile menu button click listener
    $(mb_nav.menuBtn).click(function() {
      //console.log("menuBtn clicked, toggling mobile nav. Is it hidden now? " + $('body').hasClass('mobile_menu_hidden'));
      mb_nav._toggleMobileNav();
    });
    
    $(mb_nav.arrowBtn).mouseover( function() {
      var thisSubnavContainer = $(this).parent().find(mb_nav.subnavContainer);        
    });
    
    // Mobile menu subnav arrow click listener (eventually put on all touch screens)
    $(mb_nav.arrowBtn).click( function() {
      var thisSubnavContainer = $(this).parent().find(mb_nav.subnavContainer);
      mb_nav._toggleMobileSubnav(thisSubnavContainer);
      $(this).toggleClass('reverse'); // turn the arrow upside down
    });
          
    // Load / resize / scroll listener
    //   removed "scroll" because scroll shouldn't affect nav styles
    //   removed "load" and calling just setDefault from init
    $(window).bind("resize", function() {
      mb_nav._setStylesToMatchNav();
    });
  },
      
  _addNavArrows: function () {
      $(mb_nav.subnav).parents('li').addClass('more-arrow');
      $('.more-arrow').prepend('<div class="arrow_box"><span class="arrow_down"></span></div>');
    },

  /*
   * Setting mobile/desktop nav styles
   */
  _setDefaultStyles: function () {
    if (mb_nav.isMobile()) {        
      mb_nav._setMobileNav();
    } else {
      mb_nav._setDesktopNav();
    }
  },
  
  _setMobileNav: function () {
    $('body').removeClass('desktop_menu desktop_submenu_hidden').addClass('mobile_menu mobile_menu_hidden mobile_submenu_hidden');
  },
  
  _setDesktopNav: function () {
    mb_nav.collapseAllMobileContainers();
    $('body').removeClass('mobile_menu mobile_menu_hidden mobile_submenu_hidden mobile_menu_visible').addClass('desktop_menu desktop_submenu_hidden');
  },
  
  _setStylesToMatchNav: function () {
    //console.log("_setStylesToMatchNav isMobile()? " + mb_nav.isMobile());
    if (mb_nav.isMobile()) {        
      // If the nav is hideable
      // Make sure we're using 'mobile' classes
      if ($('body').hasClass('desktop_menu') || !$('body').hasClass('mobile_menu')) {
        //console.log("switching to mobile classes for nav");
        mb_nav._setMobileNav();
      }
    } else {
      // If the nav is persistent
      // Make sure we're using 'desktop' classes
      if ($('body').hasClass('mobile_menu') && !$('body').hasClass('desktop_menu')) {
        //console.log("switching to desktop classes for nav");
        mb_nav._setDesktopNav();
        $(mb_nav.subnavContainer).removeClass('expanded');        
      }
    }
  },
  
  _toggleMobileNav: function () {
    var $b = $('body');
    var mobileMenuIsHidden = !$b.hasClass('mobile_menu_visible');
    
    mb_nav.navHeight = $(mb_nav.globalNav).height() + $(mb_nav.expandingMenuContainer).height() + this.navHeightOffset;
    
    if (mobileMenuIsHidden) {
      // Show nav
      $(mb_nav.navContainer).css('height', mb_nav.navHeight); 
      $(mb_nav.expandingMobileMenuContainer).css('height', mb_nav.navHeight);
      $b.removeClass('mobile_menu_hidden').addClass('mobile_menu_visible');
      
      $(mb_nav.globalNavContainer).css('opacity', 1); // Starts off 0 opacity to avoid FOUC -JM
    } else {
      // Hide nav
      $b.addClass('mobile_submenu_hidden');
      mb_nav.collapseAllMobileContainers();
      $(mb_nav.arrowBtn).removeClass('reverse'); // Sets the nav arrows to down
      $b.removeClass('mobile_menu_visible').addClass('mobile_menu_hidden');
    }
  },
  
  _toggleMobileSubnav: function ( thisSubnavContainer ) {
    var thisMobileSubmenuIsHidden = !$(thisSubnavContainer).hasClass('expanded');
    var $thisSubnav = $(thisSubnavContainer).find('.subnav');
    mb_nav.subnavHeight = $thisSubnav.height() + mb_nav.subnavPaddingBottom;
    if (thisMobileSubmenuIsHidden) {
      this._expandSubNav(thisSubnavContainer);
    } else {
      this._contractSubNav(thisSubnavContainer);
    }
  },
    
  _expandSubNav: function ( target ) {
    // Tell the body that there is a mobile submenu showing
    $('body').removeClass('mobile_submenu_hidden');
    $(target).addClass('expanded');

    var curH = $(mb_nav.navContainer).height();
    var subH = mb_nav.subnavHeight;
    var newH = (curH + subH).toString() + 'px';
    
    // Expand the height of the main menu container
    $(mb_nav.expandingMobileMenuContainer).css('height', newH);
    
    // Expand the height of the main menu
    $(mb_nav.navContainer).css('height', newH);
    
    // Expand the height of this submenu
    $(target).css('height', mb_nav.subnavHeight);
  },
  
  _contractSubNav: function ( target ) {    
    $(target).removeClass('expanded');

    var curH = $(mb_nav.navContainer).height();
    var subH = mb_nav.subnavHeight;
    var newH = (curH - subH).toString() + 'px';
    
    // Contract the height of the main menu container
    $(mb_nav.expandingMobileMenuContainer).css('height', newH);
    
    // Contract the height of the main menu
    $(mb_nav.navContainer).css('height', newH);
    
    // Contract the height of this submenu
    $(target).css('height', 0);

  },
  
  collapseAllMobileContainers: function () {
    $(mb_nav.navContainer).css('height', 0);
    $(mb_nav.subnavContainer).css('height', 0).removeClass('expanded');
    $(mb_nav.expandingMobileMenuContainer).css('height', 0);
  }, 
  
  /* Determine nav style by checking media query-based CSS changes */
  isMobile: function() {
    return $(mb_nav.menuBtn).is(':visible');
  },

}



/* ----- end mb_nav.----- */
;
