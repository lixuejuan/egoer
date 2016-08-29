    $(function() {
         //菜单滚动事件
         $(window).scroll(function() {
         	var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
         	if (scrollY > 0){ //如果滚动距离大于100px则显示，
         		$('header').addClass("active");
         	} 
         	else {
         		$('header').removeClass("active");
         	}
         });

        //菜单显示隐藏
        $("nav ul li").mouseover(function(){
            if($(this).hasClass("active")){
                $(this).addClass("myactive");
                
            }else{
                $(this).addClass("active"); 
            }
            $(this).children(".two_menu").show();
        }).mouseout(function(){
            if($(this).hasClass("myactive")){
            
            }else{
                $(this).removeClass("active");
            }
            $(this).children(".two_menu").hide();
        });
         
       // 产品概览动画
         $(".product_list").mouseenter(function() {
                $(this).children(".product_mask").animate({
                    top: '0px'
                }, 600, "easeOutCubic");
                $(this).children(".mask_box").animate({
                    left: '0px'
                }, 600, "easeOutCubic");
                $(this).siblings(".product_btn").children("span").addClass("active");
            }).mouseleave(function() {
                $(this).children(".product_mask").animate({
                    top: '-600px'
                }, 600, "easeOutCubic");
                $(this).children(".mask_box").animate({
                    left: '-500px'
                }, 600, "easeOutCubic");
                $(this).siblings(".product_btn").children("span").removeClass("active");
            });


       // 经典案例动画
            var Classic_list_H = $(".Classic_list").height();
            var maskH = (Classic_list_H - 143) / 2;
            $(".classic_box").css({
                "margin-top": maskH + "px"
            });
            $(".Classic_list").mouseenter(function() {
                $(this).children(".classic_mask").show();
            }).mouseleave(function() {
                $(this).children(".classic_mask").hide();
            })
        

        //客服动画
        $(".online_open").mouseenter(function(){
            $(".online_box").stop(true,false).animate({width:'200px',height:'201px'},700,"easeOutCubic");
        }).mouseleave(function(){
            $(".online_box").stop(true,false).animate({width:'0px',height:'0px'},700,"easeOutCubic");
        });

        //微信出现动画
        $(".shares span").mouseenter(function(){
            $(this).children().stop(true,false).animate({width:'120px',height:'120px',opacity:"1"},700,"easeOutCubic");
        }).mouseleave(function(){
            $(this).children().stop(true,false).animate({width:'0px',height:'0px',opacity:"1"},700,"easeOutCubic");
        });


        //返回顶部  
        $(window).scroll(function(){  
            if ($(window).scrollTop()>100){  
                $(".back_up").fadeIn(1500);  
            }  
            else  
            {  
                $(".back_up").fadeOut(1500);  
            }  
        });
        $(".back_up a").click(function(){  
            $('body,html').animate({scrollTop:0},1000);
            return false;  
        }); 

          // 动画函数；
        function left_animaion(element){
            $(element).animate({left:'-150px'},0);  
        }

        function right_animaion(element){
            $(element).animate({left:'0px'},0); 
        } 

        // 手机侧滑菜单显示隐藏
        $(".visible_icon span").on("click",function(){
            $(this).toggleClass("active");
            if($(this).hasClass("active")){
                left_animaion("header");
                left_animaion(".egoer_wrapp");
                $(".visible_nav").animate({right:'0px'},0);
                
            }else{
                right_animaion("header");
                right_animaion(".egoer_wrapp");
                $(".visible_nav").animate({right:'-150px'},0);
            }
        });
        

       // 百度地图API功能
        var map = new BMap.Map("mymap");

        map.centerAndZoom(new BMap.Point(108.907029, 34.245592),20); 
            setTimeout(function(){
                map.setZoom(14);   
            }, 2000);  //2秒后放大到14级
            // map.centerAndZoom(point, 12);
            // map.enableScrollWheelZoom(true);

        var point = new BMap.Point(108.907029, 34.245592);
        var marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中

        var label = new BMap.Label("高新区高新三路8号西高智能大厦508室", {
            offset: new BMap.Size(20, -10)
        });
        // marker.setLabel(label);


   




    });
