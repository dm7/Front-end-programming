$(document).on('ready', Handler);

function Handler(){
	$('#btn1').on('click', ClickHandler1);

	function ClickHandler1(){
		$('p').addClass('colorClass');
	}

	$('#btn2').on('click', ClickHandler2);

	function ClickHandler2(){
		$('p').removeClass('colorClass');
	}	

	
	$('#btn3').on('click', ClickHandler3);

	function ClickHandler3(){
		$('p').addClass('colorClass italicsClass');
	}

	$('#btn4').on('click', ClickHandler4);

	function ClickHandler4(){
		$('p').removeClass('colorClass italicsClass');
	}

	$('#btn5').on('click', ClickHandler5);

	function ClickHandler5(){
		$('p').addClass('colorClass italicsClass boldClass');
	}

	$('#btn6').on('click', ClickHandler6);

	function ClickHandler6(){
		$('p').removeClass(); //removes all classes
	}

	$('#btn7').on('click', ClickHandler7);

	function ClickHandler7(){
		$('p').toggleClass('colorClass italicsClass boldClass');
	}
}