<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Set email recipient
    $to = "bumsuyi@gmail.com"; // Replace with your email address
    
    // Set email subject
    $subject = "New message from website contact form";
    
    // Compose email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";
    
    // Send email
    mail($to, $subject, $email_message);
    
    // Optionally, redirect the user to a thank you page
    // header("Location: thank_you.html");
    exit;
}
?>