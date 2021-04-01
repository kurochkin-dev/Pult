$(document).ready(function () {

  let sliderOne = new Swiper('.swiper-container.swiper-container--sale', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoPlay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    speed: 500,

  });

  let sliderTwo = new Swiper('.swiper-container.swiper-container--discount', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoPlay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    speed: 500,
  });

  $('.menu__item').mouseover(function () {
    let url = $(this).attr('data-image');
    $('.menu__img').attr('src', url);
  });

});

