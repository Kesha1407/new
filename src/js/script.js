$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      autoplaySpeed: 2000,
      autoplay: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="./img/left-solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="./img/right-solid.png"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]
    });
  });