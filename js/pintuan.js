
window.onload=function(){
    //拼团页动画
    bannerAnimation();
    //banner 动画函数
    function bannerAnimation() {
        $(".animation_left").animate({
            left: '0px',
            opacity: '1'
        }, 700, "easeOutSine");
        $(".animation_right").animate({
            right: '0px',
            opacity: '1'
        }, 700, "easeOutSine");
    }

       //小轮播图
        var swiper = new Swiper('.swiper-container', {
        autoplay: 2000,
        loop: true,
        pagination: '.swiper-pagination',
        effect: 'flip',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'

       });

}


   




