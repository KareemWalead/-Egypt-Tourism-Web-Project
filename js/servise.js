    // Initialize everything when document is ready
    $(document).ready(function(){
        // Initialize WOW.js
        if(typeof WOW !== 'undefined') {
            new WOW().init();
        }
        
        // Initialize Owl Carousel if it exists
        if($.fn.owlCarousel) {
            $('.testimonial-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: true,
                rtl: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                }
            });
        }
        
        // Hide spinner when page loads
        $('#spinner').fadeOut(500);
    });