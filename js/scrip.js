var mySwiper = new Swiper('.header__slider', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,

     // Navigation arrows
     navigation: {
       nextEl: '.slider__btn--next',
       prevEl: '.slider__btn--prev',
     },
   })