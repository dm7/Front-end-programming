$(document).ready(formHandler);

function formHandler(){
	var name = $('#name');
	var nameDetails = $('#nameDetails');
	var email = $('#email');
	var emailDetails = $('#emailDetails');
	var pass1 = $('#pass1');
	var pass2 = $('#pass2');
	var pass1Details = $('#pass1Details');
	var pass2Details = $('#pass2Details');
	var message = $('#message');

	name.on('blur', validateName);
	pass1.on('blur', validatePass1);
	pass2.on('blur', validatePass2);
	email.on('blur', validateEmail);
	message.on('blur', validateMessage);	

	name.on('keyup', validateName);
	pass1.on('keyup', validatePass1);
	pass2.on('keyup', validatePass2);
	email.on('keyup', validateEmail);
	message.on('keyup', validateMessage);	

	$('#contact_form').on('submit', submitFunction);

	function submitFunction(){
		if(validateName() & validateEmail() & validatePass1() & validatePass2() & validateMessage()){
			return true;
		}else{
			return false;
		}
	}

	function validateName(){
		if(name.val().length < 5){
			name.addClass("error");
			nameDetails.text("Your name isn't that long. Make it 3 characters or more.");
			nameDetails.addClass('error');
			return false;
		}else{
			name.removeClass('error');
			nameDetails.text('What\'s your name?');
			nameDetails.removeClass('error');
			return true;
		}
	}

	function validateEmail(){
		var userEmailID = email.val();
		var regexp = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_­-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9­]+.[a-z]{2,4}$/;
		if(regexp.test(userEmailID)){
			email.removeClass('error');
			emailDetails.text('Can I get back to you?');
			emailDetails.removeClass('error');
			return true;
		}else{
			email.addClass('error');
			emailDetails.text('Enter valid email address please');
			emailDetails.addClass('error');
			return false;
		}
	}


	function validatePass1(){
		if(pass1.val().length < 8){
			pass1.addClass('error');
			pass1Details.text('8 character or more please');
			pass1Details.addClass('error');
			return false;	
		}else{
			pass1.removeClass('error');
			pass1Details.text('Valid password');
			pass1Details.removeClass('error');
			return true;
		}
	}

	function validatePass1(){
		if((pass2.val().length >= 8) && (pass2.val() !== pass1.val())){
			pass2.addClass('error');
			pass2Details.text('Passwords do not match');
			pass2Details.addClass('error');
			return false;	
		}else{
			pass2.removeClass('error');
			pass2Details.text('Same as above');
			pass2Details.removeClass('error');
			return true;
		}
	}

	function validateMessage(){
		if(message.val().length < 30){
			message.addClass("error");
			return false;
		}else{
			message.removeClass("error");
			return true;
		}
	}
}