$(document).ready(function(){
    $('.burger').click(function(){
        $('.main-menu').removeClass('menu-none')
    })

    $('.close').click(function(){
        $('.main-menu').addClass('menu-none')
    })
})