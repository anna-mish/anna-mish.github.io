 $(document).ready(function(){

   var link = $('#hamburger');
  //  var link_active = $('.menu-link_active');
   var menu = $('#mobile-navigation');
   var hidden= $('.hidden');
   var overlay = $('#overlay');
  //  var nav_link = $('.menu a')
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





  //  link.click(function(){ 
  //      link.toggleClass('menu-link_active');
  //      menu.toggleClass('menu_active'); 
  //  });

  //  overlay.click(function(){ 
  //   menu.fadeOut(800); 
  //   link.addClass('menu-link_active');  
  // });
 
 