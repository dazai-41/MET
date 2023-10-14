$(document).ready(function(){
    
    $(productsCarouselPhoto).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        customPaging : function(slider, i) {
            return '<div class="slick-dot></div>';
        },
        arrows:false,
        infinite: false,
    })

    $(productsCarousel).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows:true,
    })

    $(sliderNews).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows:true,
    })
});