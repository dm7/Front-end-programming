$(document).ready(Handler);
	
function Handler(){

	$('li').on('click', ClickHandler);
	function ClickHandler(){ /* This will handler for each li element in memory*/
		$(this).fadeOut(500);
	}

	$('#btnAdd').on('click', AddListHandler);
	function AddListHandler(){
		var newListItem = $('<li>New list item</li>').on('click', ClickHandler);
		$('ul').append(newListItem);
	}

	/*
		Better performance code is below
		
		$('ul').on('click', 'li', ClickHandler);
		function ClickHandler(){
			$(this).fadeOut(500);
		}
		
		$('#btnAdd').on('click', AddListHandler);
		function AddListHandler(){
			var newListItem = '<li>New list item</li>';
			$('ul').append(newListItem);
		}		

	*/
}