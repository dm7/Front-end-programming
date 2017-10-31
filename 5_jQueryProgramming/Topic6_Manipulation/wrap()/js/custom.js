$(document).on('ready', Handler);

function Handler(){
	$('div').wrap('<div class="containerDiv"></div>');
	$('div').unwrap();
	$('div').wrapall('<div class="containerDiv"></div>');
}