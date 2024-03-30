const swiperTop = new Swiper('.top_swiper', {
  // Optional parameters
  effect: 'fade',
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var swiperAbout = new Swiper(".about_slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

document.querySelectorAll(".accordion_triger").forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordion_item-active')
  })
})


document.querySelector(".burger").addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
});

