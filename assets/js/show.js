$(function(){
	//商品缩略图与大图的对应展示
	$('.imgList ul li').mouseenter(function(){
		$('.imgList ul li').removeClass('checked');
		var index=$(this).index();
		$(this).addClass('checked')
		$('.bigImg ul li').removeClass('show');
		$('.bigImg ul li').eq(index).addClass('show');
	});
	//大家都在看，左右按钮的实现
	$('.allsee-right').click(function(){
		$('.prodShowlist').animate({left:-960},600);
		$(this).removeClass('activeBtn');
		$('.allsee-left').addClass('activeBtn');
	})
	$('.allsee-left').click(function(){
		$('.prodShowlist').animate({left:0},600);
		$(this).removeClass('activeBtn');
		$('.allsee-right').addClass('activeBtn');
	})
	//详情评价选项卡
	$('.details-tab a').eq(1).click(function(){
		$(this).addClass('activeTab');
		$('.details-tab a').eq(0).removeClass('activeTab');
	})
	$('.details-tab a').eq(0).click(function(){
		$(this).addClass('activeTab');
		$('.details-tab a').eq(1).removeClass('activeTab');
	})
})