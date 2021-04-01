$(document).ready(function () {

  let sliderOne = new Swiper('.swiper-container.swiper-container--sale', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

  });

  let sliderTwo = new Swiper('.swiper-container.swiper-container--discount', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

  });

  $('.menu__item').mouseover(function () {
    let url = $(this).attr('data-image');
    $('.menu__img').attr('src', url);
  });

});

