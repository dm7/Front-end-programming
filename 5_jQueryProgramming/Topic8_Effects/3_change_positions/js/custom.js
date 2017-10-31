$(document).ready(Handler);
	
function Handler(){
	$('#myImg').on('click', ClickHandler);
	function ClickHandler(){
		$(this)
				.animate({'left': 300})
				.animate({'top': 300})
				.animate({'left': 10})
				.animate({'top': 10});
	}
}