 $(document).ready(function(){

   var link = $('#hamburger');
  //  var link_active = $('.menu-link_active');
   var menu = $('#mobile-navigation');
  //  var nav_link = $('.menu a')

   link.click(function(){
       link.toggleClass('menu-link_active');
       menu.toggleClass('menu_active');
   });

    // $(document).click(function(){ 
    //   menu.hide(2000);
    // });
 
 
 }); 