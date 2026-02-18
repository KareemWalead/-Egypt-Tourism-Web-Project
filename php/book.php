<?php
include "db.php";


if ($_POST) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $travel_date = mysqli_real_escape_string($conn, $_POST['travel_date']);
    $destination = mysqli_real_escape_string($conn, $_POST['destination']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);
    $created_at = date('Y-m-d H:i:s');

    
    $sql = "INSERT INTO tourbookings (name, email, travel_date, destination, message, created_at) 
            VALUES ('$name', '$email', '$travel_date', '$destination', '$message', '$created_at')";

    if ($conn->query($sql) === TRUE) {
        
		header("Location: booking2.html");
    exit;
    } else {
        $error = "خطأ: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

