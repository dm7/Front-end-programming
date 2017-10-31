$(document).ready(Handler);

function Handler(){
	$('#btn').mouseup(ClickHandler);
	
	function ClickHandler(event){ /* jQuery wrapper event*/
		var whichButton = "";
		switch(event.which){
			case 1: whichButton = "Left button clicked";
			case 2: whichButton = "Middle button clicked";
			case 3: whichButton = "Right button clicked";	
		}
		$('#divResult').html(whichButton);
	}
}



/* 
	Javascript approach
	function MouseButtonClicked(event){
		var whichButton = ""
		if(event.which){
			switch(event.which){
				case 1: whichButton = "Left button clicked";
				case 2: whichButton = "Middle button clicked";
				case 3: whichButton = "Right button clicked";
			}
		}else{
			switch(event.button){
				case 1: whichButton = "Left button clicked";
				case 4: whichButton = "Middle button clicked";
				case 2: whichButton = "Right button clicked";
			}
		}
		document.getElementById('#divResult').html(whichButton);
	}
*/
