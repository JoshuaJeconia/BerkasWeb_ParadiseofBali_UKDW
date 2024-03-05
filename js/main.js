(function ($) {
  'use strict';

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
      $('.nav-bar').addClass('sticky-top');
    } else {
      $('.nav-bar').removeClass('sticky-top');
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
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // Header carousel
  $('.header-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
  });
  $(document).ready(function () {
    $('.header-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      dots: true, // Menampilkan titik navigasi
      dotsEach: true, // Menampilkan titik navigasi untuk setiap slide
    });
  });

  // Testimonials carousel
  $('.testimonial-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav: true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
})(jQuery);




const carouselTrack = document.querySelector('.carousel-track');
const images = carouselTrack.querySelectorAll('img');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const dots = document.querySelectorAll('.carousel-dot');

let currentSlide = 0;
let imageWidth = images[0].clientWidth;

// Set up dots based on number of images
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    carouselTrack.style.transform = `translateX(-${currentSlide * imageWidth}px)`;
    updateDots();
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const moreFotoButton = document.querySelector('#more-foto');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  const carousel = document.querySelector('.carousel');
  let currentSlide = 0;
  let imageWidth = 0;

  moreFotoButton.addEventListener("click", () => {
    carousel.style.display = "block";
    // Wait for the images to load and then get the width
    const images = carousel.querySelectorAll('img');
    const promises = Array.from(images).map(image => {
      return new Promise((resolve) => {
        image.addEventListener('load', () => {
          resolve();
        });
      });
    });

    Promise.all(promises).then(() => {
      imageWidth = carousel.querySelector("img").clientWidth;
      currentSlide = 0;
      carousel.querySelector(".carousel-track").style.transform = `translateX(-${currentSlide * imageWidth}px)`;
    });
  });

  prevButton.addEventListener("click", () => {
    currentSlide--;
    carousel.querySelector(".carousel-track").style.transform = `translateX(-${currentSlide * imageWidth}px)`;
  });

  nextButton.addEventListener("click", () => {
    currentSlide++;
    carousel.querySelector(".carousel-track").style.transform = `translateX(-${currentSlide * imageWidth}px)`;
  });
});