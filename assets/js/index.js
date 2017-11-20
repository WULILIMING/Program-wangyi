$(function(){
	//倒计时功能
	function backTime(){
		setInterval(function() {
			var nowTime=(new Date()).getTime();
			var targetTime=(new Date('2019/09/26 22:00:00')).getTime();
	        var outTime = targetTime - nowTime;
	        var s = Math.floor(outTime / 1000 % 60);
	        if (s < 10) {
	            s = '0' + s;
	        }
	        var min = Math.floor(outTime / 1000 / 60 % 60);
	        if (min < 10) {
	            min = '0' + min;
	        }
	        var hours = Math.floor(outTime / 1000 / 60 / 60 % 24);
	        if (hours < 10) {
	            hours = '0' + hours;
	        }
	        $('.adTime span').eq(0).text(hours);
	        $('.adTime span').eq(1).text(min);
	        $('.adTime span').eq(2).text(s);
	    }, 111)
	}
	backTime();


	//大家都在说的轮播功能
	var allsayTimer=0;
	var allsayIndex=0;
	var allsayLen=$('.sayList li').length;
	function allsayChange(cb){
		cb();
		$('.sayList').stop(true).animate({left:-367*allsayIndex},600);
	}
	function allsayRun(){
		allsayTimer=setInterval(function(){
			allsayChange(function(){
				allsayIndex++;
				if(allsayIndex>allsayLen-3){
					allsayIndex=1;
					$('.sayList').css('left',0);
				}
			});
		},2000);
	}
	allsayRun();
	$('.sayList').mouseenter(function(){
		clearInterval(allsayTimer);
	}).mouseleave(function(){
		allsayRun();
	});
	$('.rightBtn').stop(true).click(function(){
		allsayChange(function(){
				allsayIndex++;
				if(allsayIndex>allsayLen-3){
					$('.sayList').css('left',0);
					allsayIndex=1;
				}
			});
		
	})
	$('.leftBtn').stop(true).click(function(){
		allsayChange(function(){
				allsayIndex--;
				if(allsayIndex<0){
					allsayIndex=allsayLen-3;
					$('.sayList').css('left',-370*allsayIndex);
				}
			});
		
	})


	//新品首发的左右点击按钮
	var newcfIndex=0;
	var newcfLen=$('.newprod .prodList li').length/4;
	function newscfChange(cb){
		cb();
		$('.newprod .prodList ul').stop(true).animate({left:-1102*newcfIndex},600);
	}
	$('.newprod .left').stop(true).click(function(){
		newscfChange(function(){
			newcfIndex--;
			if(newcfIndex<0){
				$('.newprod .left').removeClass('active');
				$('.newprod .right').addClass('active');
				newcfIndex=0;
			}
		});
		
	})

	$('.newprod .right').stop(true).click(function(){
		newscfChange(function(){
			newcfIndex++;
			if(newcfIndex>=newcfLen-1){
				$('.newprod .right').removeClass('active');
				$('.newprod .left').addClass('active');
				newcfIndex=newcfLen-1;
			}
		});
		
	})
})