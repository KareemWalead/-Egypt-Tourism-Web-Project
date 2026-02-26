<?php
include "db.php";

// جلب الحجوزات
$sql = "SELECT * FROM tourbookings ORDER BY created_at DESC";
$result = $conn->query($sql);

session_start();

if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}


?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>لوحة التحكم - الحجوزات</title>
<meta name="viewport" content="width=device-width, initial-scale=1">


<style>
body { background:#f5f7fa; }
.table th, .table td { vertical-align: middle; }


</style>

</head>

<body>
<div class="text-end mb-3">
    <a href="logout.php" class="btn btn-danger">تسجيل الخروج</a>
</div>

<div class="container py-5">

    <h2 class="mb-4 text-center">📋 لوحة تحكم الحجوزات</h2>

    <div class="card shadow">
        <div class="card-body table-responsive">

            <table class="table table-bordered table-hover text-center">
                <thead class="table-dark">
                    <tr>
    <th>#</th>
    <th>الاسم</th>
    <th>البريد الإلكتروني</th>
    <th>تاريخ الرحلة</th>
    <th>الوجهة</th>
    <th>ملاحظات</th>
    <th>تاريخ الحجز</th>
    <th>إجراء</th>
</tr>

                </thead>
                <tbody>

                <?php if ($result->num_rows > 0): ?>
                    <?php $i = 1; while($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?= $i++; ?></td>
                        <td><?= htmlspecialchars($row['name']); ?></td>
                        <td><?= htmlspecialchars($row['email']); ?></td>
                        <td><?= htmlspecialchars($row['travel_date']); ?></td>
                        <td><?= htmlspecialchars($row['destination']); ?></td>
                        <td><?= htmlspecialchars($row['message']); ?></td>
                        <td><?= htmlspecialchars($row['created_at']); ?></td>
						<td>
    <a href="delete.php?id=<?= $row['id']; ?>"
       class="btn btn-sm btn-danger"
       onclick="return confirm('هل أنت متأكد من حذف هذا الحجز؟');">
       🗑 حذف
    </a>
</td>
                    </tr>
                    <?php endwhile; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="7">لا توجد حجوزات حتى الآن</td>
                    </tr>
                <?php endif; ?>

                </tbody>
            </table>

        </div>
    </div>

</div>

</body>
</html>

<?php $conn->close(); ?>
