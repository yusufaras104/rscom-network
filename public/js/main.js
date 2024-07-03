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
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
            $('.nav-link').addClass('linkBt').css('color', '#000');
    
            $('.navbar-nav').css({
                'backdrop-filter': 'blur(6px)',
                'border-radius': '5px',
                'padding': '10px'
            });
    
            $('.nav-link').mouseover(function() {
                $(this).css('color', '#F08233');
            }).mouseout(function() {
                $(this).css('color', '#000');
            });

            $('.Logo').mouseover(function() {
                $(this).css({'background-color': 'rgba(240, 130, 51, 0.2)'});
            }).mouseout(function() {
                $(this).css({'background-color': 'rgba(255, 255, 255, 0)'});
            });
    
            $('.Logo').css({
                'padding': '8px',
                'box-shadow': '0 0 20px rgba(0, 0, 0, 0.5)',
                'background-color': 'rgba(255, 255, 255, 0)',
                'backdrop-filter': 'blur(3px)',
                'border-radius': '5px'
            });
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
            $('.nav-link').removeClass('linkBt').css('color', '#F4F7FE');
    
            $('.nav-link').mouseover(function() {
                $(this).css('color', '#F08233');
            }).mouseout(function() {
                $(this).css('color', '#fff');
            });
    
            $('.Logo').css({
                'padding': '0px',
                'background': 'none',
                'border-radius': '0px',
                'box-shadow': 'none'
            });
        }
    });


    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
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
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);



let currentSlide = 0;
const slides = document.querySelectorAll('.slide2');

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide', 'slide-fade');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active-slide', 'slide-fade');
}

// İlk slaydı göster
showSlide(currentSlide);

// Otomatik geçiş
setInterval(() => {
  showSlide(currentSlide + 1);
}, 15000); // 5 saniyede bir geçiş yapar, istediğiniz süreyi buradan ayarlayabilirsiniz


// Diğer kodlar

// İleri ve geri tuşlarını kullanarak slaytları değiştirme
function plusSlides(n) {
    showSlide(currentSlide + n);
  }
  

// Slayt noktalarını oluştur
const slideDotsContainer = document.querySelector('.slide-dots');
slides.forEach((slide, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => {
    showSlide(index);
    updateDots(); // Slayt değiştiğinde noktaları güncellemeyi unutmayalım
  });
  slideDotsContainer.appendChild(dot);
});

// Etkin noktayı güncelle
function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active-dot');
    } else {
      dot.classList.remove('active-dot');
    }
  });
}

// İlk durumda etkin noktayı ayarla
updateDots();



// Slayt değiştiğinde nokta rengini güncelle
function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide', 'slide-fade');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active-slide', 'slide-fade');
  updateDots(); // Slayt değiştiğinde noktaların rengini güncelle
}



document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.carousel-item');
    var currentSlide = 0;
    
    function showSlide(n) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
    
    document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
  });
  