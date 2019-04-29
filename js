var i=0;
var timer=0;
var $width=1920;
var $li=$("ul.banner_img li");
$("ul.banner_ind>li").first().css("background","#e74c3c");
$("ul.banner_img").append($("ul.banner_img>li:eq(0)").clone());
var $lth=$('ul.banner_img li').length;
$('ul.banner_img').css('width',$width*$lth);
// 左右滑动图
function fun1(){  
		i++;
		$("ul.banner_img").animate({left:-i*$width},500,function(){
			if(i>=$lth-1){
				$("ul.banner_img").css('left',0);
                i=0;
            }
            $("ul.banner_ind>li").eq(i).css("background","#e74c3c").siblings().css("background","#fff");
        })  
}
function moveAuto(){
	timer=setInterval(fun1,4000)
}
moveAuto();
//鼠标移入移出
$("div.banner").mouseenter(function(){
    clearInterval(timer);
    timer=null;
}).mouseleave(function(){
    moveAuto()
})
//左右箭头
//左箭头
$(".banner .ck-left").click(function(e){
    e.preventDefault();
    if(i==0){
		i=$lth-1;
		$("ul.banner_img").css('left',-i*$width);
	}
    i--;
    $("ul.banner_img").animate({left:-i*$width},500,function(){
        if(i<0){
            $("ul.banner_img").css('left',-$width*6);
            i=6;
        }
        $("ul.banner_ind>li").eq(i).css("background","#e74c3c").siblings().css("background","#fff");
    })
})
//右箭头
$(".banner .ck-right").click(function(e){
    e.preventDefault();
    i++;
    $("ul.banner_img").animate({left:-i*$width},500,function(){
        if(i>=$lth-1){
            $("ul.banner_img").css('left',0);
            i=0;
        }
        $("ul.banner_ind>li").eq(i).css("background","#e74c3c").siblings().css("background","#fff");
    })
})
//圆点点击切换
$("ul.banner_ind").click(function(e){
    i=$(e.target).index();
    $("ul.banner_img").animate({left:-i*$width},500,function(){
        if(i>=$lth-1){
            $("ul.banner_img").css('left',0);
            i=0;
        }
    })
    $("ul.banner_ind>li").eq(i).css("background","#e74c3c").siblings().css("background","#fff");
 })
