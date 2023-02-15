$(document).ready(function () {
    $('.navbar__burger').click(function (event) {
        $('.navbar__burger,.navbar__burger_nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).click('on', function (event) {
    const burger = $('.active');
    const body = $('body');
    if (!burger.is(event.target) && burger.has(event.target).length === 0) {
        burger.removeClass("active");
        body.removeClass('lock');
    }
});

