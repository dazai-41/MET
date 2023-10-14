$(document).ready(function(){
    $("#productsCarousel").owlCarousel({
        loop:true,
        mouseDrag: false,
        touchDrag: false,
        margin: 30,
        navText : ["<img src='assets/img/left-arrow.svg'>","<img src='assets/img/right-arrow.svg'>"],
        nav:true,
        items:2
    });

    $('#productsCarouselPhoto').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        dots: true,
        items: 1
    });
  });