$(document).ready(function () {

  // $('.swiper-object .swiper-container').each(function (index, value) {
  //   var mySwiper = new Swiper(value, {
  //     autoplay: {
  //       delay: 5000,
  //     },
  //     pagination: {
  //       el: value.nextElementSibling.nextElementSibling.nextElementSibling,
  //       clickable: true,
  //     },
  //     slidesPerView: 'auto',
  //   });
  //
  // });

  let sliderOne = new Swiper('.swiper-container.swiper-container--sale', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    speed: 500,

  });

  let sliderTwo = new Swiper('.swiper-container.swiper-container--discount', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    speed: 500,
  });


  $('.menu__item').mouseover(function () {
    let url = $(this).attr('data-image');
    $('.menu__img').attr('src', url);
  });


});