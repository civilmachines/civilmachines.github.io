<?php
if (isset($_POST['name']) || isset($_POST['email']) || isset($_POST['phone']) || isset($_POST['message'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['phone'];
    $message = $_POST['message'];
    if (!empty($name) && !empty($email) && !empty($message)) {
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html;' . "\r\n";
        $headers .='From: ' . $name . '<' . $email . '> \r\n Reply-to: ' . $email;
        $subject = "CMT Contact Form Enquiry";
        $message = " Name : <b>".$name."</b> <br> Email : <b>".$email."</b> <br> Contact No. : <b>".$mobile."</b> <br> Message : <b>".$message."</b>";
		
		if (mail("info@civilmachines.com", $subject, $message, $headers)) {
            echo 'success';
        } else {
            echo 'failed';
        }
    }
}
?>	





