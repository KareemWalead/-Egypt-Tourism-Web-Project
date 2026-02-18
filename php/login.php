<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<title>تسجيل دخول الأدمن</title>

<style>
.login-box {
    background: #fff;
    border-radius: 15px;
    padding: 30px;
	
	 position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
 <meta charset="utf-8">
   <title>اكتشف سحر مصر</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
   
    <!-- Favicon -->
    <link href="../img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
  
    <!-- Icon Font Stylesheet -->
   
    <!-- Libraries Stylesheet -->
    <link href="../lib/animate/animate.min.css" rel="stylesheet">
    <link href="../lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
  <link rel="stylesheet" href="../css/style.css">
  <!-- <link rel="stylesheet" href="css/all.min.css"> -->
   <link rel="stylesheet" href="../icons/bootstrap-icons-1.13.1/icons-main/font/bootstrap-icons.css">
 
</head>

<body>
 <div class="container-fluid bg-primary py-5 mb-5 hero-header">
            <div class="container py-5">
                <div class="row justify-content-center py-5">
                    <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="col-md-4 login-box shadow">
        <h3 class="text-center mb-4">🔐 دخول الأدمن</h3>

        <form action="login_check.php" method="POST">
            <div class="mb-3">
                <label>اسم المستخدم</label>
                <input type="text" name="username" class="form-control" required>
            </div>

            <div class="mb-3">
                <label>كلمة المرور</label>
                <input type="password" name="password" class="form-control" required>
            </div>

            <button class="btn btn-primary w-100">تسجيل الدخول</button>
        </form>

        <?php if (isset($_GET['error'])): ?>
            <div class="alert alert-danger mt-3 text-center">
                بيانات الدخول غير صحيحة
            </div>
        <?php endif; ?>
    </div>
</div>

                </div>
            </div>
        </div>
    </div>

        

    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
    <h4 class="text-white mb-3">الشركة</h4>
    <a class="btn btn-link" href="">من نحن</a>
    <a class="btn btn-link" href="">اتصل بنا</a>
    <a class="btn btn-link" href="">سياسة الخصوصية</a>
    <a class="btn btn-link" href="">الشروط والأحكام</a>
    <a class="btn btn-link" href="">الأسئلة الشائعة والمساعدة</a>
</div>

                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Contact</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 الشارع، نيويورك، الولايات المتحدة</p>
<p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
<p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>

                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">المعرض</h4>

                    <div class="row g-2 pt-2">
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="../img/airplane.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="../img/southSina.jpeg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="../img/package-2.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="../img/praimds.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="../img/sands.jpeg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="../img/package-1.jpg" alt="">
                        </div>
                    </div>
                </div>
               <div class="col-lg-3 col-md-6">
    <h4 class="text-white mb-3">النشرة الإخبارية</h4>
    <p>اشترك لتصلك آخر الأخبار والعروض الخاصة مباشرة إلى بريدك الإلكتروني.</p>
    <div class="position-relative mx-auto" style="max-width: 400px;">
        <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="بريدك الإلكتروني">
        <button type="button" class="btn btn-primary py-2 position-absolute top-0 start-0 mt-1 me-2">اشترك</button>
    </div>
</div>

                </div>
            </div>
        </div>
       
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>


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
</body>
</html>
