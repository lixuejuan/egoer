$(function() {
    $(".business_list").mouseenter(function() {
        $(this).children(".business_mask").addClass("active");
        $(this).children(".business_tab").addClass("active");
    }).mouseleave(function() {
        $(this).children(".business_mask").removeClass("active");
        $(this).children(".business_tab").removeClass("active");
    });

});
window.onload = bannerAnimation;
//banner 动画函数
function bannerAnimation() {
    $(".bus_left").animate({
        top: '0px',
        opacity: '1'
    }, 700, "easeOutCirc");
    $(".bus_right").animate({
        bottom: '0px',
        opacity: '1'
    }, 700, "easeOutCirc");
}
