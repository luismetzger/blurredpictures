<?php

// Turn off all error reporting
error_reporting(0);

if($_POST)
{
	$to_email       = "blurred.info@gmail.com"; //Recipient email, Replace with own email here
//	$to_email       = "pervej86@gmail.com"; //Recipient email, Replace with own email here



	$output = json_encode(array( //create JSON data
		'type'=>'sucess',
		'text' => $_POST["isContactPage"]
	));

	//check if its an ajax request, exit if not
	if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

		$output = json_encode(array( //create JSON data
			'type'=>'error',
			'text' => 'Sorry Request must be Ajax POST'
		));
		die($output); //exit script outputting json data
	}

	/**
	 * @param $inputField
	 * @param string $appendValue
	 *
	 * @return string
	 */
	function check_post($inputField, $appendValue = ''){
		if($appendValue != ''){
			return isset($_POST[$inputField]) ? $appendValue . filter_var( $_POST[$inputField] . "\r\n", FILTER_SANITIZE_STRING ) : '';
		}
		return isset($_POST[$inputField]) ? $appendValue . filter_var( $_POST[$inputField], FILTER_SANITIZE_STRING ) : '';
	}


	$user_name     = check_post('nombre', 'User Name: ');
	$user_name_s = '';
	if($user_name){
		$user_name_s = $_POST['nombre'];
	}
	$subject     = check_post('asunto', 'Subject: ');
	$company     = check_post('time', 'TIME FRAME:: ');
	$user_email     = check_post('email');
	$phone    = check_post('budget', 'BUDGET:: ');
	$state     = check_post('state', 'State: ');
	$title    = check_post('title', 'Title: ');
	$type_of_position   = check_post('top_radio', 'Type of Position: ');
	$message     = check_post('mensaje', 'Message: ');
	$to_email_id     = (int)check_post('dea_id');
	if($subject == ''){
		$subject = 'Contact Form - Inquiry';
	}
	$message_body = '';

	$to_email = $to_email[$to_email_id];

	//additional php validation
	if(!filter_var($user_email, FILTER_VALIDATE_EMAIL)){ //email validation
		$output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
		die($output);
	} else {
		$user_email_msg = "Email: $user_email \r\n";
	}
	if(strlen($message)<13){ //check emtpy message
		$output = json_encode(array('type'=>'error', 'text' => 'Too short message! Please enter something.'));
		die($output);
	}



	//email body
	$message_body .= $user_name . $type_of_position . $title . $company . $state . $phone . $user_email_msg . $message;

//	die($message_body);


	//proceed with PHP email.
	$headers1 = 'From: '.$user_email.'' . "\r\n" .
	            'X-Mailer: PHP/' . phpversion();

	$send_mail = mail($to_email, $subject, $message_body, $headers1);


	if(!$send_mail)
	{
		//If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
		$output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_name_s .', thank you for your email.'));
		die($output);
	}
}
?>