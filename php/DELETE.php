<?php
include "db.php";

if (isset($_GET['id'])) {

    $id = intval($_GET['id']); // حماية

    $sql = "DELETE FROM tourbookings WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        header("Location: admin.php");
        exit;
    } else {
        echo "خطأ أثناء الحذف: " . $conn->error;
    }
} else {
    echo "رقم الحجز غير موجود";
}

$conn->close();
?>
