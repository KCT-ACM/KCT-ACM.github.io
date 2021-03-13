<?php

if($_POST["submit"]) {
    $recipient="freeacc602@gmail.com";
    $subject="Form to email message";
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["text"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    if(mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>")){
        echo"Thank you! Your message has been sent";
    }
    else{
        echo"Something Went wrong";
    }
}
?>