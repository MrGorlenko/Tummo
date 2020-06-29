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
        slidesPerView: 6,
        grabCursor: true,
        // followFinger: false,
        // preventInteractionOnTransition: true,
        // initialSlide: -6,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          progressbarOpposite: true,
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        },
      })
})