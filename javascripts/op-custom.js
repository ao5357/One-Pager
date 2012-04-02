jQuery(document).ready(function ($) {

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
		$(this).parent().children('.content').slideToggle('100', function() {
  			});			
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

//change color of text and empty the search bar when it is clicked on	
$('input[id="searchbox"]').focus(function(){
      		$(this).css('color','#000').val('');
  		}); 
		 
	 
});