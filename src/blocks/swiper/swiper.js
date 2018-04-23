document.addEventListener('DOMContentLoaded', function(){

  if (document.querySelector('.swiper-container')) {

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 200,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var swiperResizeBtn = document.querySelector('.swiper-resize-btn');
    swiperResizeBtn.addEventListener('click', toggleSize);

    function toggleSize() {
      var swiperContainer = document.querySelector('.swiper-container');
      var svg =  swiperResizeBtn.querySelector('svg');
      swiperContainer.classList.toggle('js-fullsize');
      swiper.update();
    }
  
  }

});

