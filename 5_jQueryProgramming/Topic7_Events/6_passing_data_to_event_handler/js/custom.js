$(document).ready(Handler);

function Handler(){
	$('#btnClickMe').on('click', 
						{
							firstName: 'John',
							lastName: 'Doe',
							getName: function(){return 'Hello ' + this.firstName + ' ' + this.lastName; }
						}, 
						ClickHandler);
	function ClickHandler(event){
		alert(event.data.getName());
	}
}