<?php
header('Content-Type: application/json');

// جلب بيانات الفورم
$data = $_POST;

// تحقق من البيانات الأساسية
if(!isset($data['full_name'], $data['email'], $data['phone'], $data['departure_date'])) {
    echo json_encode([
        'success' => false,
        'message' => 'البيانات الأساسية ناقصة'
    ]);
    exit;
}

// مثال: ممكن هنا تخزن البيانات في قاعدة بيانات
// $conn = new mysqli('localhost','username','password','database');
// $stmt = $conn->prepare("INSERT INTO bookings (full_name,email,phone,departure_date,travelers,payment_method,card_number,expiry,cvv) VALUES (?,?,?,?,?,?,?,?,?)");
// $stmt->bind_param("ssssissss", $data['full_name'], $data['email'], $data['phone'], $data['departure_date'], $data['travelers'], $data['payment_method'], $data['card_number'], $data['expiry'], $data['cvv']);
// $stmt->execute();

// مثال: إرسال إيميل تأكيد (اختياري)
// mail($data['email'], "تأكيد الحجز", "شكراً لحجزك معنا!");

echo json_encode([
    'success' => true,
    'message' => 'تم استلام الحجز بنجاح! شكراً لك.'
]);
?>