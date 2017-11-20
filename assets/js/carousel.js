$(function(){
	//轮播图部分
	// 初始化变量值
	var index=0;
	var timer=0;
	var len=$('.carousel-image li').length;
	// 封装的变化形式函数
	function change(cb){
		$('.carousel-image li:eq('+index+')').stop(true).fadeOut(1000);
		$('.carousel-index li:eq('+index+')').stop(true).removeClass('indexActive');
		cb();
		$('.carousel-image li:eq('+index+')').stop(true).fadeIn(1000);
		$('.carousel-index li:eq('+index+')').stop(true).addClass('indexActive');
	}
	// 轮播图自动切换函数
	function run(){
		timer=setInterval(function(){
			change(function(){
				index++;
				if(index>len-1){
					index=0;
				}
			});
		},3000);
	}
	run();
	// 轮播图移入移出事件
	$('.carousel').stop(true).mouseenter(function(){
		clearInterval(timer);
	}).stop(true).mouseleave(function(){
		run();
	});
	//轮播图小圆点移入事件
	$('.carousel-index li').mouseover(function(){
		change(function(){
			index=$(this).index();
		}.bind(this));
	})
	//轮播图左按钮的点击
	$('.carousel-left').click(function(){
		change(function(){
			index--;
			if(index<0){
				index=len-1;
			}
		});
	})
	$('.carousel-right').click(function(){
		change(function(){
			index++;
			if(index>len-1){
				index=0;
			}
		});
	})
	//轮播图结束
})