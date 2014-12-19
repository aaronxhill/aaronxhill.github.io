//--------------Make Font Size Responsive----------------------

//--------------Always in the middle horizontally & vertically----------------------

$(window).resize(function(){
	var browserHeight = $(window).height();
	$('body').css ({
		'height': browserHeight,
	});
});

$ (function(){
	var browserHeight = $(window).height();
	$('body').css ({
		'height': browserHeight,
	});
});

$(window).resize(function(){
	if ( $(window).width() > 800) {
		var textsizepercentage = ( $(window).width() / 1000);
		$('section.question').css ( 'font-size', 2.5 * textsizepercentage + 'em' );
	}
	else {
		$('section.question').css ( 'font-size', '2em' );
	}
});

$(function(){
	if ( $(window).width() > 800) {
		var textsizepercentage = ( $(window).width() / 1000);
		$('section.question').css ( 'font-size', 2.5 * textsizepercentage + 'em' );
	}
	else {
		$('section.question').css ( 'font-size', '2em' );
	}
});

$(window).resize(function() {
	if ( $(window).width() > 1200) {
		var buttonpercentage = ($(window).width() / 1200)
		$('section.choices p').css ({
			'width': 2.5 * buttonpercentage + 'em',
			'height': 2.5 * buttonpercentage + 'em',
			'border-radius': (2.5 * buttonpercentage) / 2 + 'em',
			'line-height': 2.5 * buttonpercentage - 0.1 + 'em',
			'font-size': 1.8 * buttonpercentage + 'em'
		});
	}
	else {
		$('section.choices p').css ({
			'width': '2.5em',
			'height': '2.5em',
			'border-radius': '1.25em',
			'line-height': '2.4em',
			'font-size': '1.8em'
		});
	}
});

$(function() {
	if ( $(window).width() > 1200) {
		var buttonpercentage = ($(window).width() / 1200)
		$('section.choices p').css ({
			'width': 2.5 * buttonpercentage + 'em',
			'height': 2.5 * buttonpercentage + 'em',
			'border-radius': (2.5 * buttonpercentage) / 2 + 'em',
			'line-height': 2.5 * buttonpercentage - 0.1 + 'em',
			'font-size': 1.8 * buttonpercentage + 'em'
		});
	}
	else {
		$('section.choices p').css ({
			'width': '2.5em',
			'height': '2.5em',
			'border-radius': '1.25em',
			'line-height': '2.4em',
			'font-size': '1.8em'
		});
	}
});

$(window).resize(function(){
	if ( $(window).width() > 800) {
		var textsizepercentage = ( $(window).width() / 1000);
		$('section.answer').css ( 'font-size', 3.5 * textsizepercentage + 'em' );
	}
	else {
		$('section.answer').css ( 'font-size', '3em' );
	}
});

$(function(){
	if ( $(window).width() > 800) {
		var textsizepercentage = ( $(window).width() / 1000);
		$('section.answer').css ( 'font-size', 3.5 * textsizepercentage + 'em' );
	}
	else {
		$('section.answer').css ( 'font-size', '3em' );
	}
});