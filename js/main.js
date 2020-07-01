$(document).ready(function(){
    var textWrapper = document.getElementById("title");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
    targets: '.title .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1250,
    delay: (el, i) => 150 * (i+1)
    })

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        spaceBetween: 20,
        slidesPerView: 2,
        grabCursor: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          progressbarOpposite: true,
        },
    
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        },
        breakpoints:{
          992: {
            slidesPerView: 4,
          }
        }
      })

      var mySwiper = new Swiper ('.swiper-container-2', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        spaceBetween: 20,
        slidesPerView: 3,
        // grabCursor: true,

        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        //   progressbarOpposite: true,
        // },
    
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   draggable: true
        // },
        // breakpoints:{
        //   992: {
        //     slidesPerView: 4,
        //   }
        // }
      })

    $('.burger').click(function(){
        $('.main-menu').removeClass('menu-none')
    })

    $('.close').click(function(){
        $('.main-menu').addClass('menu-none')
    })


    anime({
        targets: '.fractal-1',
        keyframes: [
          {rotate: 7}
        ],
        loop: true,
        duration: 3500,
        direction: 'alternate',
        easing: 'linear'
    });

    anime({
        targets: '.fractal-2',
        keyframes: [
          {rotate: 360}
        ],
        loop: true,
        duration: 101000,
        direction: 'alternate',
        easing: 'linear'
    });

    anime({
        targets: '.fractal-3',
        keyframes: [
          {rotate: -360}
        ],
        loop: true,
        duration: 100000,
        direction: 'alternate',
        easing: 'linear'
    });


})