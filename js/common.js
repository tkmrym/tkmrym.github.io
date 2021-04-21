$(function() {
	const hum = $('#hamburger, .close')
	const nav = $('.sp-nav')
	hum.on('click', function(){
		nav.toggleClass('toggle');
	});
	});

$(function() {
$('.header-img-slide img:nth-child(n+2)').hide();
	setInterval(function() {
		$(".header-img-slide img:first-child").fadeOut(2000);
		$(".header-img-slide img:nth-child(2)").fadeIn(2000);
		$(".header-img-slide img:first-child").appendTo(".header-img-slide");
	}, 4000);
});