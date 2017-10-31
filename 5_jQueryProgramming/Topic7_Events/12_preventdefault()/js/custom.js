$(document).ready(Handler);
	
function Handler(){

	$(this).on('contextmenu', ContextMenuHandler);
	function ContextMenuHandler(event){
		event.preventDefault();
		$('#divResult').append('Right Click disabled <br>');
	}
}