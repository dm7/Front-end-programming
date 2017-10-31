$(document).on('ready', Handler);

function Handler(){
	$('img[src="help.png"]')
							.mouseover(function(){   $('#' + getDivId(this)).fadeIn(500);  })
							.mouseout(function(){    $('#' + getDivId(this)).fadeOut(500);  });

	function getDivId(helpIcon){
		var helpIconId = $(helpIcon).attr('id');
		return helpIconId.replace('img', 'div');
	}

	/*
		Same logic using different syntax:

		$('img[src="help.png"]')
							.mouseover(function(){   $('#' + getDivId(this)).fadeIn(500);  })
							.mouseout(function(){    $('#' + getDivId(this)).fadeOut(500);  });

		
		or
				
		$('img[src="help.png"]').hover(
										function(){$('#' + getDivId(this)).fadeIn(500);},
										function(){$('#' + getDivId(this)).fadeOut(500);}
									);

	*/						
}