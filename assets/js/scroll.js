$(document).ready(function () {
    $(document).on("scroll", function(){
    var scrollPos = $(document).scrollTop();
    $('.progress-bar a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.length) {
    var refElementTop = refElement.position().top;
    var refElementBottom = refElementTop + refElement.height();
    if (refElementTop <= scrollPos && refElementBottom > scrollPos) {
    $('.progress-bar a').removeClass("isActive");
    currLink.addClass("isActive");
    }
    }
    });
    });
    });