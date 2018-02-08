
$(document).ready(function () {
    let menuOpen = false;
    $('#mobileMenuLogo').click(function (event) {
        event.preventDefault();

        if (!menuOpen) {
            $('body').addClass('open');
            menuOpen = true;
        }
        else {
            $('body').removeClass('open');
            menuOpen = false;
        }
    });

    $('#bannerText').mouseenter(function () {
        $(this).addClass('animated tada');
    })
    $('#bannerText').mouseleave(function () {
        $(this).removeClass('animated tada');
    })
});