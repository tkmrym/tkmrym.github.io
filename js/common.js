$(function() {
	const hum = $('#hamburger, .close')
	const nav = $('.sp-nav')
	hum.on('click', function(){
		nav.toggleClass('toggle');
	});
	});

$(function() {
$('.header-img-slide img:nth-child(n)').hide();
	$(".header-img-slide img:first-child").fadeIn(1500);
	setInterval(function() {
		$(".header-img-slide img:first-child").fadeOut(1500);
		$(".header-img-slide img:nth-child(2)").fadeIn(1500);
		$(".header-img-slide img:first-child").appendTo(".header-img-slide");
	}, 13000);
});

$(function(){
	$(window).on('load scroll',function (){
		$('.main-fadein').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('main-fadein-active');
			}
		});
	});
});