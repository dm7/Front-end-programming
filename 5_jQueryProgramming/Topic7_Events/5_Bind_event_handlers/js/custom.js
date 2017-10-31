$(document).ready(Handler);

function Handler(){

	/*
		Bind the event handler using bind()
	*/
	$('#btnClickMe').bind('click', ClickHandler1);
	function ClickHandler1(event){
		$('#divResult').html('Button Clicked at X = ' + event.pageX + ' Y = ' + event.pageY);
	}

	/*
		Bind multiple event handlers using bind()
	*/
	$('#btnClickMe').bind('click mouseover mouseout', MouseHandler);
	function MouseHandler(event){
		if(event.type === 'click'){
			$('#divResult').html('Clicked');
		}else if(event.type === 'mouseover'){
			$('#btnClickMe').addClass('ButtonStyle');
		}else{
			$('#btnClickMe').removeClass('ButtonStyle');
		}
	}


	/*
		Bind multiple event handlers using on() with object literal
	*/
	$('#btnClickMe').on({
		click:           function(event){ $('#divResult').html('Clicked'); },
		mouseover: 		 function(event){ $('#btnClickMe').addClass('ButtonStyle'); },
		mouseout:        function(event){ $('#btnClickMe').removeClass('ButtonStyle'); }
	});

	
	/*
		bind() and unbind()
	*/
	$('btnEnableMouseOverEfeect').click(ClickHandler2);
	function ClickHandler2(){
		$('#btnClickMe').bind('mouseover', function(){  $(this).addClass('ButtonStyle'); });
	}

	$('btnDisableMouseOverEffect').click(ClickHandler3);
	function ClickHandler3(){
		$('#btnClickMe').unbind('mouseover');
	}

}