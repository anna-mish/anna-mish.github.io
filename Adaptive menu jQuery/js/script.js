 $(document).ready(function(){

   var link = $('#hamburger');
  //  var link_active = $('.menu-link_active');
   var menu = $('#mobile-navigation');
   var hidden= $('.hidden');
   var overlay = $('#overlay');
  //  var nav_link = $('.menu a')

   link.click(function(){ 
       link.toggleClass('menu-link_active');
       menu.toggleClass('menu_active'); 
   });

   overlay.click(function(){ 
    menu.fadeOut(800); 
    link.toggleClass('menu-link_active');  
  });

 
 }); 
 