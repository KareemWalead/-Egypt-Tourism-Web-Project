<?php
include "db.php";

if (isset($_POST['email'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $sql = "INSERT INTO saveemail (Email) VALUES ('$email')";

    if ($conn->query($sql) === TRUE) {
        echo "تم الاشتراك بنجاح ✅";
    } else {
        echo "حدث خطأ: " . $conn->error;
    }
}

$conn->close();
?>
