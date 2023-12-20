<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
<script>
$(".swiper").append(`<div class="swiper-pagination"></div>`);

const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  centeredSlides: true,
  centeredSlidesBounds: true,
  initialSlide: 1,
  slideToClickedSlide: true,
  autoplay: {
   delay: 5000,
 },
  mousewheel: {
    forceToAxis: true
  },
  speed: 300,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 1.5
    }
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev"
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  }
});
</script>
