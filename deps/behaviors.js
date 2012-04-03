/**
 * Skeleton V1.1
 * Copyright 2011, Dave Gamache
 * www.getskeleton.com
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 8/17/2011
 */

(function ($) {
  // hash change handler
  function hashchange () {
    var hash = window.location.hash
      , el = $('ul.tabs [href*="' + hash + '"]')
      , content = $(hash)

    if (el.length && !el.hasClass('active') && content.length) {
      el.closest('.tabs').find('.active').removeClass('active');
      el.addClass('active');
      content.show().addClass('active').siblings().hide().removeClass('active');
    }
  }

  // listen on event and fire right away
  $(window).on('hashchange.skeleton', hashchange);
  hashchange();
  $(hashchange);
})(jQuery);

jQuery(document).ready(function($){
	// Placeholder polyfill
	if(!("placeholder" in document.createElement("input"))){
		$("input[placeholder]").each(function(){
			$this = $(this), val = $this.attr("placeholder");
			$this.val(val).css("color","#aaa")
				.focus(function(){
					$this.css("color","#000");
					if($this.val() == val){$this.val("");}
					})
				.blur(function(){
					if($this.val() == ""){$this.val(val).css("color","#aaa");}
					});
			});
		}

	$('.flexslider').flexslider();
	var $mainMenu = $('#section-one, #section-two, #section-three, #section-four, #section-five, #section-six, #section-seven, #section-eight');
	var $locationsPage = $('#locations-page');
	$locationsPage.hide();
	var $aboutPage = $('#about-page');
	$aboutPage.hide();

	//toggling all the content
	var $header = $('.content-section').children('h2, img');
	$('.content-section').children('.content').hide();
	$header.css('cursor', 'pointer').click(function(){
		$(this).parent().children('.content').slideToggle('100', function(){});
		});
	//reset
	var $fullreset = $('.logotype');
	var $resetButton = $('h2#reset');
	$resetButton.hide();
	$fullreset.click(function(){
		window.location.reload(true);
		});
	//events
	$('.events').css('cursor', 'pointer').click(function(){
		$('.events').not(this).fadeTo("slow", 0.1);
		$(this).fadeTo("slow", 1);
		});
	//locations page
	var $locations = $('#locations'); 
	$locations.css('cursor', 'pointer').click(function(){
		$resetButton.show();	
		$mainMenu.slideUp();
		$locationsPage.slideDown();
		});
	//about page
	var $about = $('#about'); 
	$about.css('cursor', 'pointer').click(function(){
		$resetButton.show();
		$mainMenu.slideUp();
		$aboutPage.slideDown();
		});
	$resetButton.click(function(){
		$mainMenu.slideDown();
		$resetButton.hide();
		$locationsPage.slideUp();
		$aboutPage.slideUp();
		});

	$('#eventone').click(function(){
		$(".eventtext").html("<h3><strong>Library Ferris Wheel</strong></h3><strong>When: April 11th, all day</strong><br />Did you know that the first Ferris Wheel was invented by George Washington Gale Ferris, Jr? No problem. Come to the library and enjoy his invention. ");
		});

	$('#eventtwo').click(function(){
		$(".eventtext").html("<h3><strong>Step to the Mic</strong></h3><strong>When: April 20th, 7:30pm</strong><br />Another library poetry slam! Are these even popular?");
		});

	$('#eventthree').click(function(){
		$(".eventtext").html("<h3><strong>Niceville Reads War & Peace</strong></h3><strong>When: Most of 2012.</strong><br />You voted and we listened. Everyone is reading War & Peace and we're hosting some programs about it.");
		});
});