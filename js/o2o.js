$(document).ready(function(e) {
    //tab切换
    $(".o2o_tab ul li").on("click", function() {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(".o2o_box").children().index($(this).index());
        $(".o2o_box").eq($(this).index()).show().siblings().hide();
    });

    
	window.onload = bannerAnimation;
	//banner 动画函数
	function bannerAnimation() {
	    $(".o2o_right").animate({
	        left: '0px',
	        opacity: '1'
	    }, 700, "easeOutCirc");
	    $(".o2o_left").animate({
	        right: '0px',
	        opacity: '1'
	    }, 700, "easeOutCirc");
	}
});

