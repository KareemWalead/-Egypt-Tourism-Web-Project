<!DOCTYPE html>
<html lang="en" lang="ar" dir="rtl">

<head>
    <meta charset="utf-8">
   <title>اكتشف سحر مصر</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="../img/favicon.ico" rel="icon">

      <!-- Libraries Stylesheet -->
    <link href="../lib/animate/animate.min.css" rel="stylesheet">
    <link href="../lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
  <link rel="stylesheet" href="../css/style.css">
  <!-- <link rel="stylesheet" href="css/all.min.css"> -->
   <link rel="stylesheet" href="../icons/bootstrap-icons-1.13.1/icons-main/font/bootstrap-icons.min.css">

 
<!-- <style>

</style> -->

</head>


<body>
   

    <!-- Navbar & Hero Start -->
    <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" class="navbar-brand p-0">
               <h1 class="hamshary m-0"><i class="fa fa-map-marker-alt me-3"></i>اكتشف سحر مصر</h1>

                <!-- <img src="img/logo.png" alt="Logo"> -->
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="../html/index.html" class="nav-item nav-link active">الرئيسية</a>
                    <a href="../html/about.html" class="nav-item nav-link">من نحن</a>
                    <a href="../html/service.html" class="nav-item nav-link">الخدمات</a>
                   <a href="../html/package.html" class="nav-item nav-link">الباقات</a>
                   <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">الصفحات</a>
                        <div class="dropdown-menu m-0">
                            <a href="../html/works.html" class="dropdown-item">الوجهات</a>
                            <a href="../html/booking.html" class="dropdown-item">الحجز</a>
                            <a href="../html/team.html" class="dropdown-item">مرشدي السفر</a>
                            <a href="../html/testimonial.html" class="dropdown-item">آراء العملاء</a>
                             <a href="../html/advise.html" class="dropdown-item">نصائح للسفر</a>
							 <a href="../ahram/ahram.html" class="dropdown-item">بانوراما</a>
                        </div>
                    </div>
                   <a href="../html/contact.html" class="nav-item nav-link">اتصل بنا</a>
				  </div>
                  <a href="login.php" class="btn btn-primary rounded-pill py-2 px-4">لوحة التحكم</a>
            </div>
        </nav>

        <div class="container-fluid bg-primary py-5 mb-5 hero-header">
            <div class="container py-5">
                <div class="row justify-content-center py-5">
                    <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                       
					 
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Navbar & Hero End -->


   
 
    <!-- JavaScript Libraries -->
    <script src="../js/jquery-3.4.1.min.js"></script>
    <script src="../js/bootstrap.bundle.min.js"></script>
    <script src="../lib/wow/wow.min.js"></script>
    <script src="../lib/easing/easing.min.js"></script>
    <script src="../lib/waypoints/waypoints.min.js"></script>
    <script src="../lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="../lib/tempusdominus/js/moment.min.js"></script>
    <script src="../lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="../lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
    

 
    <!-- Template Javascript -->
    <script src="../js/main.js"></script>
	<script>
let track = document.querySelector(".slider-track");

// سرعة الحركة
let speed = 3;

function animate() {
    track.style.left = (track.offsetLeft - speed) + "px";

    let first = track.children[0];
    if (first.getBoundingClientRect().right < 0) {
        track.appendChild(first);
        track.style.left = "0px";
    }
    requestAnimationFrame(animate);
}

animate();
</script>
  <?php

mb_internal_encoding('UTF-8');

$search = trim($_GET['q'] ?? '');
if ($search === '') die('<p>اكتب كلمة للبحث</p>');

echo "<meta charset='UTF-8'>";
echo "<h2>نتائج البحث عن: <mark>$search</mark></h2>";

$files = glob("*.html"); 
$found = false;

foreach ($files as $file) {

    $content = file_get_contents($file);

   
    $encodings = ['UTF-8', 'Windows-1256', 'ISO-8859-6'];
    foreach ($encodings as $enc) {
        $converted = @mb_convert_encoding($content, 'UTF-8', $enc);
        if ($converted !== false) {
            $content = $converted;
            break;
        }
    }

   
    $text = strip_tags($content);

  
    $text = preg_replace('/\s+/u', ' ', $text);

   
    if (mb_stripos($text, $search) !== false) {
        $pos = mb_stripos($text, $search);
        $snippet = mb_substr($text, max(0, $pos - 50), 150);
        $snippet = str_ireplace($search, "<mark>$search</mark>", $snippet);

        echo "
        <div style='border:1px solid #ddd; padding:15px; margin:15px 0; border-radius:10px'>
            <a href='$file'><strong>$file</strong></a>
            <p>$snippet...</p>
        </div>
        ";

        $found = true;
    }
}

if (!$found) {
    echo "<p>❌ لا توجد نتائج مطابقة</p>";
}
?>					   
</body>

</html>