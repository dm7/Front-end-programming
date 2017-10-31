$(document).on('ready', Handler);

function Handler(){
	$('#btn')
			.click(EventDetails)
			.mouseover(EventDetails)
			.mouseout(EventDetails);


	function EventDetails(event){ /* Pre IE9 does not support these event properties*/
		var eventDetails =  'Event type = ' + event.type  + '<br>' +
							'X =  '         + event.pageX + '<br>' +
							'Y =  '         + event.pageY + '<br>' +
							'Target element = ' + event.target.type + '<br>' +
							'Name =  ' 			+ event.target.tagName;
		$('#divResult').html(eventDetails);
	}

	/*
		To target all browsers use jquery
		
		function EventDetails(event){ 
			var e = $.event.fix(event);
			var eventDetails =  'Event type = ' + e.type  + '<br>' +
								'X =  '         + e.pageX + '<br>' +
								'Y =  '         + e.pageY + '<br>' +
								'Target element = ' + e.target.type + '<br>' +
								'Name =  ' 			+ e.target.tagName;
			$('#divResult').html(eventDetails);
		}
	*/
}