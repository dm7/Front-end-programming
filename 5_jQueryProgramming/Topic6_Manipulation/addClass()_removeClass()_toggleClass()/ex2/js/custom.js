$(document).on('ready', Handler);

function Handler(){
	$('input[type="text"]')
						.each(function(){  
											$(this).focus(function(){ $(this).addClass('textBoxStyle') });  
											$(this).blur(function(){ $(this).removeClass('textBoxStyle') });
										});
}