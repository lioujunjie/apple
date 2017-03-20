$(function(){	
	var flag=true;
	$(".mbx").click(function(){
		if(flag){
			flag=false;			
			$(".line1").css("transform","translate(0,6px) rotate(45deg)")	;
			$(".line2").css("transform","translate(0,-3px) rotate(-45deg)")
		}
		else{
			$(".line1").css("transform","translate(0,0px) rotate(0deg)")	;
			$(".line2").css("transform","translate(0,0px) rotate(0deg)")
			flag=true;
		}
			$(".myul").slideToggle();
	})
	window.onresize=function(){
		var clientW=$(window).width();
		var clientH=$(window).height();
		$(".myul").css("height",clientH);
		if(clientW>765){
			$(".myul").css("display","none");
			flag=true;
			$(".line1").css("transform","translate(0,0px) rotate(0deg)")	;
			$(".line2").css("transform","translate(0,0px) rotate(0deg)")
		}
	}
	
	//轮播
	var time=3000;
	var nowNum=0;
	var nextNum=0;
	var t1=setInterval(move,4000);	
	var t2=setInterval(btn,50);
	var nowTime=0;
	var flak=true;
	var flag1=true;
	
	function btn(){
		nowTime+=50;
		var bili=nowTime/time;			
		if(bili>=1){
			bili=1;
		}
		$(".btn>li>div").eq(nowNum).css({width:bili*100+"%"})
		if(!flak){
			$(".btn>li>div").css("width","0")
			flak=true
		}
	}	
	
	function move(){
		nextNum++;
		if(nextNum>$(".banner-back").length-1){	
			nextNum=0;			
		}
		$(".banner-back").eq(nextNum).css({zIndex:2,left:"100%"}).animate({left:0},1000);
		$(".banner-back").eq(nowNum).css("z-index","1").animate({width:"80%",height:"90%"},1000,function(){					
			$(".banner-back").eq(nowNum).css("left","100%");
			$(".banner-back").eq(nowNum).css({width:"100%",height:"100%"});		
			flag1=true;
			nowNum=nextNum;	
			nowTime=0;
			if(nextNum==0){
				flak=false
			}
		})		
	}
	$(".rbtn").click(function(){
		if(flag1){
			flag1=false;
			clearInterval(t1);
			clearInterval(t2);
			move();
			$(".btn>li>div").css("width","0");
			$(".btn>li>div").eq(nextNum).css("width","100%")
		}
		
		
	})
	$(".lbtn").click(function(){
		if(flag1){
			flag1=false;
			clearInterval(t1);
			clearInterval(t2);
			nextNum--;
			if(nextNum<0){
				nextNum=$(".banner-back").length-1
			}
			$(".banner-back").eq(nextNum).css({zIndex:2,left:"-100%"}).animate({left:0},1000);
			$(".banner-back").eq(nowNum).css("z-index","1").animate({left:"100%"},1000,function(){
				flag1=true;
			});
			nowNum=nextNum;		
			$(".btn>li>div").css("width","0");
			$(".btn>li>div").eq(nextNum).css("width","100%")
		}
		
	})
	
	
	$(".btn>li").click(function(){
		if(flag1){
			flag1=false;
			clearInterval(t1);
			clearInterval(t2);
			var num=$(this).index();
			if(num>nowNum){
				$(".banner-back").eq(num).css({zIndex:2,left:"100%"}).animate({left:0},1000);
				$(".banner-back").eq(nowNum).css("z-index","1").animate({width:"80%",height:"90%"},1000,function(){					
					$(".banner-back").eq(nowNum).css("left","100%");
					$(".banner-back").eq(nowNum).css({width:"100%",height:"100%"});
					flag1=true;
					nowNum=num;		
				})
			}
			else if(num<nowNum){	
				$(".banner-back").eq(num).css({zIndex:2,left:"-100%"}).animate({left:0},1000);
				$(".banner-back").eq(nowNum).css("z-index","1").animate({left:"100%"},1000,function(){					
				$(".banner-back").eq(nowNum).css("left","-100%");	
				flag1=true
				nowNum=num;						
				})			
			}
			$(".btn>li>div").css("width","0");
			$(".btn>li>div").eq(num).css("width","100%")
		}		
	})
	
	//底部
	$(".neirong").click(function(){
		if($(window).width()<765){
			$(this).find("li:nth-child(1)").css("margin-bottom","15px")
			$(this).find(".col-x-hid").toggle()
		}
		if($(window).width()>765){
			$(this).find("li").css("display","block")
		}
	})
})

