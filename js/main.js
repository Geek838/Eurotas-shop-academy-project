
// navbar background color on scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});



//animated bootstrap dropdowns

$('.dropdown').on('show.bs.dropdown', function (e) {
    var $dropdown = $(this).find('.dropdown-menu');
    var orig_margin_top = parseInt($dropdown.css('margin-top'));
    $dropdown.css({
        'margin-top': (orig_margin_top + 10) + 'px',
        opacity: 0
    }).animate({
        'margin-top': orig_margin_top + 'px',
        opacity: 1
    }, 300, function () {
        $(this).css({
            'margin-top': ''
        });
    });
});
$('.dropdown').on('hide.bs.dropdown', function (e) {
    var $dropdown = $(this).find('.dropdown-menu');
    var orig_margin_top = parseInt($dropdown.css('margin-top'));
    $dropdown.css({
        'margin-top': orig_margin_top + 'px',
        opacity: 1,
        display: 'block'
    }).animate({
        'margin-top': (orig_margin_top + 10) + 'px',
        opacity: 0
    }, 300, function () {
        $(this).css({
            'margin-top': '',
            display: ''
        });
    });
});



