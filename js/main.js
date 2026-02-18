(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// مربع البحث
// const searchInput = document.getElementById("searchInput");
// const cards = document.querySelectorAll(".tour-card");
// const searchBtn = document.getElementById("searchBtn");

// searchBtn.addEventListener("click",
// function () {
//     const value = searchInput.value.tolowerCase();
//     cards.forEach(cards =>{
//         const text = cards.getAttribute("data-name").tolowerCase();

//         if(text.includes(value)){
//             cards.computedStyleMap.display = "block";
//         }else{
//             cards.computedStyleMap.display = "none";
//         }
//     });
// });


// بداية الباقات ------------------
function generateTrip() {
  const destination = document.getElementById("destination").value;
  const duration = document.getElementById("duration").value;
  const mood = document.getElementById("mood").value;
  const budget = document.getElementById("budget").value;
  const result = document.getElementById("result");

  if (!destination || !duration || !mood || !budget) {
    alert("من فضلك اختار كل البيانات 👀");
    return;
  }

  result.style.display = "block";
  result.innerHTML = `
    <h3>🎯 اقتراح رحلتك</h3>
    <p><strong>الوجهة:</strong> ${destination}</p>
    <p><strong>المدة:</strong> ${duration}</p>
    <p><strong>الستايل:</strong> ${mood}</p>
    <p><strong>الميزانية:</strong> ${budget}</p>
    <hr>
    <p>📌 برنامج مخصص ليك + أفضل أنشطة تناسب اختياراتك.</p>
  `;
}
// generateTrip();



