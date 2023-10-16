//Увеличение фото по клику 

$(function(){
    $('.photo-gallery-item'). on('click', function (e) { e. preventDefault()})

    $('.photo-gallery-item').click(function(){
        $('.modal-window-wrapp .modal-window img').attr('src', $(this).attr('href'));
        $('.modal-window-wrapp').addClass('isActive');
        $('body').css('overflow-y', 'hidden');
    })
    if(!$('.modal-window-wrapp').hasClass('isActive')){
        $(document).mouseup( function(e){ 
            var div = $( ".modal-window-wrapp .modal-window .img-item" );
            if ( !div.is(e.target) 
                && div.has(e.target).length === 0 ) { 
                $('.modal-window-wrapp').removeClass('isActive');
                $('body').css('overflow-y', '');

            }
        });
    }
});