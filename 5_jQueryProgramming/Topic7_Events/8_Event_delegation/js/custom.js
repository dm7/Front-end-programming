$(document).ready(Handler);
	
function Handler(){

	$('ul').on('click', 'li', ClickHandler);
	function ClickHandler(){
		$(this).fadeOut(500);
	}
		
	$('#btnAdd').on('click', AddListHandler);
	function AddListHandler(){
		var newListItem = '<li>New list item</li>';
		$('ul').append(newListItem);
	}		

	/*
		Delegation using delegate() syntax(old): 
		
		$('ul').delegate('li', 'click', ClickHandler);
		function ClickHandler(){
			$(this).fadeOut(500);
		}

		$('ul').undelegate('li', 'click');	
	*/
}