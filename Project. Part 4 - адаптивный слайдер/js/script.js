$(document).ready(function () {
    $('.features-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                // добавляем кнопки переключения на моб экране
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>'
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // добавляем кнопки переключения на моб экране
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>'
            }
            }
        ]
    });
});