$(document).ready(Handler);
	
function Handler(){
	$('#myImg').on({
		mouseover: function(){ $(this).animate({
											'height': 400,
											'width' : 400
										}, 2000, 'linear', animationComplete) },
		mouseout: function(){ $(this).animate({
											'height': 100,
											'width' : 100
										}, 2000, 'swing', animationComplete) }
	});

	function animationComplete(){
		alert('Animation completed');
	}
}