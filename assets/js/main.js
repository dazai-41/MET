jQuery(function($){
    $('.search-btn-wrapp .search-btn').click(function(){
        $(this).parent().addClass('isActive');
    });
	$(document).mouseup( function(e){ // событие клика по веб-документу
		var searchInput = $( ".search-input-wrapp" ); // тут указываем элемент
		if ( !searchInput.is(e.target) // если клик был не по нашему блоку
		    && searchInput.has(e.target).length === 0 ) { // и не по его дочерним элементам
                searchInput.parent().removeClass('isActive'); // скрываем его
		}
	});

    $(document).ready(function(){
        if($(window).width() >= 1440){
            var carouselItemHardnessTesters = $('.prewie-block-wrap .prewie-block .content-wrapp .content .item.hardness-testers'),
                carousel = $('.prewie-block-wrap .prewie-block .content-wrapp .content'),
                carouselItemHardnessMeasures = $('.prewie-block-wrap .prewie-block .content-wrapp .content .item.hardness-measures'),
                carouselHardnessTestersArrow = $('.prewie-block-wrap .prewie-block .content-wrapp .arrow.hardness-testers'),
                scrollSliderWidth = carouselItemHardnessTesters.width() / 2;
                carouselHardnessMeasuresArrow = $('.prewie-block-wrap .prewie-block .content-wrapp .arrow.hardness-measures');
        $(carouselHardnessMeasuresArrow).click(function(){
            $(this).addClass('isActive');
            $(carouselHardnessTestersArrow).removeClass('isActive');

            $('.prewie-block-wrap .prewie-block .content-wrapp .content .item').removeClass('isActive');

            carouselItemHardnessMeasures.addClass('isActive');
            carousel.css('left', -scrollSliderWidth)
        })
        $(carouselHardnessTestersArrow).click(function(){
            $(this).addClass('isActive');
            $(carouselHardnessMeasuresArrow).removeClass('isActive');

            $('.prewie-block-wrap .prewie-block .content-wrapp .content .item').removeClass('isActive');

            carouselItemHardnessTesters.addClass('isActive');
            carousel.css('left', 0)
        })
        }
    })
    
    $(document).ready(function(){
        if($(window).width() <= 420){
            var carouselItemHardnessTesters = $('.prewie-block-wrap .prewie-block .content-wrapp .content .item.hardness-testers'),
                carousel = $('.prewie-block-wrap .prewie-block .content-wrapp .content'),
                carouselItemHardnessMeasures = $('.prewie-block-wrap .prewie-block .content-wrapp .content .item.hardness-measures'),
                carouselHardnessTestersArrow = $('.prewie-block-wrap .prewie-block .content-wrapp .arrow.hardness-testers'),
                scrollSliderWidth = carouselItemHardnessTesters.width() / 2;
                carouselHardnessMeasuresArrow = $('.prewie-block-wrap .prewie-block .content-wrapp .arrow.hardness-measures');
        $(carouselHardnessMeasuresArrow).click(function(){
            $(this).addClass('isActive');
            $(carouselHardnessTestersArrow).removeClass('isActive');

            $('.prewie-block-wrap .prewie-block .content-wrapp .content .item').removeClass('isActive');

            carouselItemHardnessMeasures.addClass('isActive');
            carousel.css('left', -scrollSliderWidth)
        })
        $(carouselHardnessTestersArrow).click(function(){
            $(this).addClass('isActive');
            $(carouselHardnessMeasuresArrow).removeClass('isActive');

            $('.prewie-block-wrap .prewie-block .content-wrapp .content .item').removeClass('isActive');

            carouselItemHardnessTesters.addClass('isActive');
            carousel.css('left', 0)
        })
        }
    })
});

$(document).ready(function(){
    if($(window).width() <= 420){
        var img = $('.about-us .container-section-wrapp').eq(1).find('.img'),
        container = $('.about-us .container-section-wrapp').eq(1).find('.container-section');
        container.append(img);
    }
})

$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('isActive');
        $('.burger-menu-wrapp').toggleClass('isActive');
        $('html').toggleClass('isActive');
    });
});

$(document).ready(function() {
    $('.accordion-btn').click(function() {
    $(this).parent().toggleClass('isActive')
})
})