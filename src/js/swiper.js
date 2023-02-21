const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'coverflow',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 8,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 50,
    modifier: 1,
    scale: 0.9,
    slideShadows: false,
  },
});
