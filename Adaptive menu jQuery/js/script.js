 $(document).ready(function(){

   var link = $('#hamburger');
   var menu = $('#mobile-navigation');
   var overlay = $('#overlay');
  
  function showNavigation() {
    link.addClass('menu-link_active');
    menu.addClass('menu_active');
    overlay.show();
    // or
    // menu.fadeIn(800);
  }

  function hideNavigation() {
    link.removeClass('menu-link_active');
    menu.removeClass('menu_active');
    overlay.hide();
    // or
    // menu.fadeOut(800);
  }

  link.click(function(){
    if (menu.hasClass('menu_active')) {
      hideNavigation();
      return;
    }
    showNavigation();
  });

  overlay.click(function(){
    hideNavigation();
  });

});