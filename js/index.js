$(function(){
	//检测滚动条
    $(window).scroll(function() {
        if($(window).scrollTop()>=400){
            $("nav").addClass("active_nav");
            $("nav a").css("color","#fff")
        }else{
            $("nav").removeClass("active_nav");
            $("nav a").css("color","#777")
        }
    }); 
    
    
    //客服
    var flag=0;
	$('#rightArrow').on("click",function(){
		if(flag==1){
			$("#floatDivBoxs").animate({left: '-175px'},300);
			$(this).animate({left: '-5px'},300);
			$(this).css('background-position','0px 0');
			flag=0;
		}else{
			$("#floatDivBoxs").animate({left: '0'},300);
			$(this).animate({left: '170px'},300);
			$(this).css('background-position','-50px 0');
			flag=1;
		}
	});
});



