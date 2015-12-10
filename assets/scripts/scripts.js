// Fork me: https://github.com/salwadora/salwadora.github.io

fullscreen();
$(window).resize(fullscreen);
$(window).scroll(headerParallax);

function fullscreen() {
	var masthead = $('.masthead');
	var windowH = $(window).height();
	var windowW = $(window).width();

	masthead.width(windowW);
	masthead.height(windowH);
}

function headerParallax() {
	var st = $(window).scrollTop();
	var headerScroll = $('.masthead h1');

	if (st < 500) {
		headerScroll.css('opacity', 1-st/1000);
		$('.masthead-arrow ').css('opacity', 0.5-st/250);
		headerScroll.css({
			'-webkit-transform' : 'translateY(' + st/7 + '%)',
			'-ms-transform' : 'translateY(' + st/7 + '%)',
			transform : 'translateY(' + st/7 + '%)'
		});
	}
}

// Video
coverVid(document.querySelector('.masthead-video'), 640, 360);
// Countdown
$(document).ready(function(){
	var username = Math.random() > 0.9 ? 'jfkz' : 'salwadora';
 	$('h1').html(username
 		+ '<span id="clock">What Are You Waiting For?</span>');
 	$(document).attr('title', username);
	$('#clock').countdown('2017/03/09')
		.on('update.countdown', function(event) {
  			$(this).html(event.strftime('%D days %H:%M:%S remain'));
		})
		.on('finish.countdown', function(event) {
			$('#clock').text('What Are You Waiting For?');
 		});
});
