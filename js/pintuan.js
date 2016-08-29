$(function() {
    /*var swiper = new Swiper('.swiper-container', {
    autoplay: 2000,
    loop: true,
    pagination: '.swiper-pagination',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'

   }
*/
//拼团页动画
    window.onload = bannerAnimation;
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
 function myanimate(element, attrs, fn) {
    //清除定时器
    if(element.timerId) {
        clearInterval(element.timerId);
    }
    element.timerId = setInterval(function () {
        //假设定时器应该停止了
        var stop = true;
        //遍历attrs对象，获取所有属性
        for(var k in attrs) {
            //获取样式属性 对应的目标值
            var target = attrs[k];
            var current = 0;
            var step = 0;
            //判断是否是要修改透明度的属性
            if(k === "opacity") {
                current = parseFloat( getStyle(element, k)) * 100 || 0;
                target = target * 100;
                step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[k] = current / 100;
                //兼容ie
                element.style["filter"] = "alpha(opacity="+  current +")";
            }else if(k === "zIndex") {
                element.style[k] = target;
            } else {
                //在上午的代码的基础上修改
                //获取任意样式属性的值，如果转换数字失败，返回为0
                current = parseInt(getStyle(element, k)) || 0;
                step = (target - current) / 10;
                //console.log("current:" + current + "  step:" + step);
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //在上午的代码的基础上修改
                //设置任意样式属性的值
                element.style[k] = current + "px";
            }
            if(step !== 0) {
                //如果有一个属性的值没有到达target  ，设置为false
                stop = false;
            }

        }
        //如果所有属性值都到达target  停止定时器
        if(stop) {
            clearInterval(element.timerId);

            //动画执行完毕  回调函数
            if(fn) {
                fn();
            }
        }
    },30);
}
//获取计算后的样式的值
function getStyle(element, attr) {
    //能力检测
    if(window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}

        var box=document.getElementById('box');
        var ul=document.getElementById('imgs');
        var ad=box.children[0];
        var ol=document.getElementById("circle");
        var arr=document.getElementById("arr");
        var left=document.getElementById("left");
        var right=document.getElementById("right");
        var imgWidth=ad.offsetWidth;
        var index=0;
        var count=ul.children.length;
        var olIndex=0;
            for( var i=0;i<ul.children.length;i++ ){
                var li=document.createElement("li");
                ol.appendChild(li);
            }
            ol.children[0].className="current";
        for(var i=0;i<ol.children.length;i++){
            var li=ol.children[i];
            li.index=i;
        }
        box.onmouseover=function(){
            clearInterval(timerId);
        }
        box.onmouseout=function(){
            timerId=setInterval(function(){
                right.click();
            },2000);
        }
        right.onclick=function(){
            if(index===count){
                index=0;
                ul.style.left="0px";
            }
            index++;
            myanimate(ul,{left:-index*imgWidth});
            if(olIndex<count-1){
                olIndex++;
            }else{
                olIndex=0;
            }
            for(var i=0;i<ol.children.length;i++){
                var li=ol.children[i];
                li.removeAttribute("class");
            }
           ol.children[olIndex].className="current";
        };
        left.onclick=function(){
            if(index===0){
                index=count;
                ul.style.left=-index*imgWidth+"px";
            }
            index--;
            myanimate(ul,{left:-index*imgWidth});
            if(olIndex>0){
                olIndex--;
            }else{
                olIndex=count-1;
            }
            for(var i=0;i<ol.children.length;i++){
                var li=ol.children[i];
                li.removeAttribute("class");
            }
            ol.children[olIndex].className="current";
        }
        var firstLi=ul.children[0];
        var cloneLi=firstLi.cloneNode(true);
        ul.appendChild(cloneLi);
        var timerId=setInterval(function(){
            right.click();
        },2000)  


     });
