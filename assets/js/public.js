$(function(){
		//预加载
		function loadImg(){
			var sTop = $(window).scrollTop();
			var wHeight = $(window).height();

			// 优化
			$('img:not(.active)').each(function(){
				if($(this).offset().top < sTop + wHeight) {
					$(this).attr('src',$(this).attr('data-src')).addClass('active');
				}
			})
		}
		// 初始化
		loadImg();
		$('.servicePer').eq(0).mouseenter(function(){
			$('.servicePer>i').eq(0).removeClass('icon-icon1');
			$('.servicePer>i').eq(0).addClass('icon-icon');
		}).mouseleave(function(){
			$('.servicePer>i').eq(0).removeClass('icon-icon');
			$('.servicePer>i').eq(0).addClass('icon-icon1');
		});
		//点击回顶部功能
		$('.backBtn').click(function(){
			$('body,html').animate({scrollTop:0},600);
		})
		//页面加载完成后5s，出现覆盖层，新人大礼
		setTimeout(function(){
			$('.cover').removeClass('hide');
		},5000);
		$('.closeBtn').click(function(){
			$('.cover').addClass('hide');
		});


		$(window).scroll(function(){
			loadImg();
			var top=$(window).scrollTop();
			if(top<2000){
				$('.backBtn')[0].style.visibility="hidden";
			}else{
				$('.backBtn')[0].style.visibility="visible";
			}
			//顶部菜单下拉
			if(top>=$('.navList').get(0).offsetTop){
				$('.topHide').stop(true).slideDown(300);
			}
			if(top<$('.navList').get(0).offsetTop){
				$('.topHide').slideUp(150);
			}
		})


		//导航菜单的各项移入效果
		$('.nav .container ul li').each(function(){
			$(this).mouseover(function(){
				$(this).addClass('nav_menuCheck');
			}).mouseout(function(){
				$(this).removeClass('nav_menuCheck');
			});
		})
		var navIndex;
		$('.nav .container ul li').each(function(){
			$(this).mouseenter(function(){
				$('.nav .topHide_selector').stop(true).slideDown(300);
				navIndex=$(this).index()-1;
				$('.nav .topHide_selector .container div').eq(navIndex).fadeIn(150);
			}).mouseleave(function(){
				$('.nav .topHide_selector').stop(true).slideUp(300);
				navIndex=$(this).index()-1;
				$('.nav .topHide_selector .container div').eq(navIndex).fadeOut(150);
			})
		})
		$('.nav .topHide_selector').mouseover(function(){
	        $(this).stop();
	    }).mouseout(function(){
	        $(this).slideUp();
	    })

	 
		//顶部菜单的各项移入效果
		$('.topHide .container ul li').each(function(){
			$(this).mouseover(function(){
				$(this).addClass('nav_menuCheck');
			}).mouseout(function(){
				$(this).removeClass('nav_menuCheck');
			});
		})
		var hideTopIndex;
		$('.topHide>.container ul li').each(function(){
			$(this).mouseenter(function(){
				$('.topHide .topHide_selector').stop(true).slideDown(300);
				hideTopIndex=$(this).index()-1;
				$('.topHide .topHide_selector .container div').eq(hideTopIndex).fadeIn(150);
			}).mouseleave(function(){
				$('.topHide .topHide_selector').stop(true).slideUp(150);
				hideTopIndex=$(this).index()-1;
				$('.topHide .topHide_selector .container div').eq(hideTopIndex).fadeOut(150);
			})
		})
		$('.topHide>.topHide_selector').mouseenter(function(){
	        $(this).stop();
	    }).mouseleave(function(){
	        $(this).slideUp();
	    })
})  