
 
    $('carousel-indicators li').click(function(){
    $('li.active').removeClass('active');
    $('this').addClass('active');    
    });

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:2
        },
        992:{
            items:3
        }
    }
})
 