
	'use strict';

	var nav_offset_top = $('header').height() + 50;
	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();

	var dropToggle = $('.menu_right > li').has('ul').children('a');
	dropToggle.on('click', function() {
		dropToggle.not(this).closest('li').find('ul').slideUp(200);
		$(this).closest('li').children('ul').slideToggle(200);
		return false;
	});

	$('.toggle_icon').on('click', function() {
		$('body').toggleClass('open');
	});

	$('.side_menu .list.menu_right').mCustomScrollbar({
		theme: 'dark'
	});


