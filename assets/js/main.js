jQuery(function($){
    // Открытие поиска в header
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

    // Слайдер в превью секции для ПК

    $(document).ready(function(){
        if($(window).width() >= 1280){
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
    
    // Слайдер в превью секции для мобилки

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

// Смена блоков при адаптации на мобилку

$(document).ready(function(){
    if($(window).width() <= 420){
        var img = $('.about-us .container-section-wrapp').eq(1).find('.img'),
        container = $('.about-us .container-section-wrapp').eq(1).find('.container-section');
        container.append(img);
    }
})

// Бургер меню на мобилке

$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('isActive');
        $('.burger-menu-wrapp').toggleClass('isActive');
        $('html').toggleClass('isActive');
    });
});

// Аккордион в меню на мобилке

$(document).ready(function() {
    $('.accordion-btn').click(function() {
    $(this).parent().toggleClass('isActive')
})
})

// Открытие модалки

$(function(){
    $('.modal-open-item').click(function(){
        var name = $(this).attr('data-name');
        var modal = $(document).find('.modal-window-wrapp[data-name="' + name + '"]');
        modal.addClass('isActive');
        $('body').css('overflow-y', 'hidden');
    })
    $(document).mouseup( function(e){ 
        var div = $( ".modal-window-wrapp .modal-window .img-item" );
        if ( !div.is(e.target) 
            && div.has(e.target).length === 0 ) { 
            $('.modal-window-wrapp').removeClass('isActive');
            $('body').css('overflow-y', '');

        }
    });
});

// Выпадашка смены языка

$(document).ready(function() {
    $('.language-wrapp .language').click(function(event) {
        event.stopPropagation(); 

        var list = $(this).siblings('.language-list');
        list.toggleClass('isActive');

        listItem = list.find('li');

        listItem.click(function(){
            if(!$(this).hasClass('isActive')){
                listItem.removeClass('isActive');
                $(this).addClass('isActive');
                $('.language-list.isActive').removeClass('isActive');
            }
        })

        $(document).on('click', function (event) {
            if (!$(event.target).closest('.language-wrapp').length) {
                $('.language-list.isActive').removeClass('isActive');
            }
        });
    });
});