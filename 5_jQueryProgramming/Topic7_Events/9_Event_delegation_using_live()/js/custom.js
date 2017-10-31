$(document).ready(Handler);
	
function Handler(){

	$('li').live('click', DelegateHandler);
	function DelegateHandler(){
		$(this).fadeOut(500);
	}

	$('#btnUndelegate').on('click', UnDelegateHandler);
	function UnDelegateHandler(){
		$('li').die('click');
	}


	/*
		delegate() does not delegate till document object

		$('ul').delegate('li', 'click', DelegateHandler);
		function ClickHandler(){
			$(this).fadeOut(500);
		}

		$('#btnUndelegate').on('click', UnDelegateHandler);
		function UnDelegateHandler(){
			$('ul').undelegate('li', 'click');
		}

	*/
}