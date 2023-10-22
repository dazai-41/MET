//Увеличение фото по клику 

$(function(){
    $('.photo-gallery-item'). on('click', function (e) { e. preventDefault()})

    $('.photo-gallery-item').click(function(){
        var name = $(this).attr('data-name');
        $('.modal-window-wrapp[data-name="' + name + '"] .modal-window img').attr('src', $(this).attr('href'));
    })
});