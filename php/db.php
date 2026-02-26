<?php
$servername = "localhost";
$username = "admin";  // اسم المستخدم من byethost
$password = "123";      // كلمة المرور
$dbname = "booking_db";       // اسم قاعدة البيانات

$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("خطأ في الاتصال: " . $conn->connect_error);
}

?>
