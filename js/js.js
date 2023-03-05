// JavaScript Document
jQuery(document).ready(function($) {

	var scrollig = false;
	$(document).ready(function() {
	
		AOS.init({
			offset: 0,
			disable: window.innerWidth < 990
		});
	
		
		$('#menu-mobile').slicknav({
			label:"Menu",
			
		});
	
		
		resize();
		$(window).on("resize", function(){
			resize();
		});
	
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();
			if(scroll > window.innerHeight/2){
				$('.stage .more').fadeOut('fast');
			}else{
				$('.stage .more').fadeIn('fast');
			}
		});
	});
	function resize(){
		var h = window.innerHeight
		if(window.innerWidth <= 760){
			h = 400;
		}else if(window.innerWidth <= 900){
			h = 700;
		}else if(window.innerWidth <= 1024){
			h = 1000;
		}
		$('.auto-height').css({"height": h});
		$('.portifolio .mockup').css({"height": $('.portifolio .mockup').width()/0.52, "top": "calc(50% - " + ($('.portifolio .mockup').width()/0.52)/2 + "px)"});
	}
});