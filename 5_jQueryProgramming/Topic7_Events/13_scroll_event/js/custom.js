$(document).ready(Handler);
	
function Handler(){
	var lastScrollTop = 0;
	var count = 0;
	$('div').on('scroll', ScrollHandler);
	function ScrollHandler(){
		var currentScrollPosition = $(this).scrollTop();
		if(currentScrollPosition > lastScrollTop){
			$('#scrollPos').text('You scrolled down - ' + currentScrollPosition);
		}else{
			$('#scrollPos').text('You scrolled up' + currentScrollPosition);
		}
		lastScrollTop = currentScrollPosition;
		$('span').text(count += 1);
	}
}