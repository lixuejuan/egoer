window.onload = bannerAnimation;

function bannerAnimation() {
    $(".tuan_left").animate({
        top: '0px',
        opacity: '1'
    }, 700, "easeOutCirc");
    $(".tuan_right").animate({
        bottom: '0px',
        opacity: '1'
    }, 700, "easeOutCirc");
}