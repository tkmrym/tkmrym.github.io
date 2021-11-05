$(function() {
	const hum = $('#hamburger, .close')
	const nav = $('.sp-nav')
	hum.on('click', function(){
		nav.toggleClass('toggle');
	});
	});

// $(function() {
// $('.header-img-slide img:nth-child(n)').hide();
// 	$(".header-img-slide img:first-child").fadeIn(1500);
// 	setInterval(function() {
// 		$(".header-img-slide img:first-child").fadeOut(1500);
// 		$(".header-img-slide img:nth-child(2)").fadeIn(1500);
// 		$(".header-img-slide img:first-child").appendTo(".header-img-slide");
// 	}, 13000);
// });