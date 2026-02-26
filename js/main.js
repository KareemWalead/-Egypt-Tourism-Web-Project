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

// dark mode ----

document.getElementById("darkBtn").onclick = function() {
  document.body.classList.toggle("dark-mode");
};

// -----------------------------

// Booking modal behavior
(function(){
    const bookBtn = document.getElementById('bookBtn');
    const modal = document.getElementById('bookingModal');
    const closeBtn = modal && modal.querySelector('.close-modal');
    const form = document.getElementById('bookingForm');

    if(!modal) return;

    function openModal(){ modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
    function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }

    if(bookBtn) bookBtn.addEventListener('click', openModal);
    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(){ closeModal(); });
    const inner = modal.querySelector('.modal-content');
    if(inner) inner.addEventListener('click', function(e){ e.stopPropagation(); });

    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            // Simple UX: show confirmation then close
            alert('شكراً، تم إرسال طلب الحجز. سنتواصل معك قريبا.');
            form.reset();
            closeModal();
        });
    }
})();

// Artifact details modal
(function(){
    const artifactModal = document.getElementById('artifactModal');
    if(!artifactModal) return;
    const artClose = artifactModal.querySelector('.close-modal');
    const artImg = document.getElementById('artifactImg');
    const artTitle = document.getElementById('artifactTitle');
    const artDesc = document.getElementById('artifactDesc');
    const artStory = document.getElementById('artifactStory');

    function openArtModal(card){
        const img = card.querySelector('img');
        const title = card.querySelector('h3') ? card.querySelector('h3').textContent : '';
        const desc = card.querySelector('.card-content p') ? card.querySelector('.card-content p').textContent : '';
        const story = card.dataset.story || '';

        artImg.src = img ? img.src : '';
        artImg.alt = title;
        artTitle.textContent = title;
        artDesc.textContent = desc;
        artStory.textContent = story;

        artifactModal.classList.add('open');
        artifactModal.setAttribute('aria-hidden','false');
    }

    function closeArtModal(){
        artifactModal.classList.remove('open');
        artifactModal.setAttribute('aria-hidden','true');
    }

// delegate clicks on card or details button
   document.addEventListener('click', function(e){
     const card = e.target.closest('.card');
     if(card){
       console.log('card clicked', card);
       openArtModal(card);
     }
   });

    artClose && artClose.addEventListener('click', closeArtModal);
    artifactModal.addEventListener('click', function(){ closeArtModal(); });
    const inner = artifactModal.querySelector('.modal-content');
    inner && inner.addEventListener('click', function(e){ e.stopPropagation(); });

})();


