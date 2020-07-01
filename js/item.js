$(document).ready(function(){

    $('.accessory').click(function(){
        $('.accessory').addClass('act')
        $('.jewerly').removeClass('act')

        $('.item-2-2').removeClass('item-none')
        $('.item-1-2').removeClass('item-none')

        $('.item-2-1').addClass('item-none')
        $('.item-1-1').addClass('item-none')


        // $('.item-1-2').addClass('item-none')
        // $('.item-2-2').addClass('item-none')

        // $('.item-1-1').removeClass('item-none')
        // $('.item-2-1').removeClass('item-none')
    })

    $('.jewerly').click(function(){
        $('.jewerly').addClass('act')
        $('.accessory').removeClass('act')

        $('.item-2-1').removeClass('item-none')
        $('.item-1-1').removeClass('item-none')

        $('.item-2-2').addClass('item-none')
        $('.item-1-2').addClass('item-none')

        // $('.item-1-2').addClass('item-none')
        // $('.item-2-2').addClass('item-none')

        // $('.item-1-1').addClass('item-none')
        // $('.item-1-2').addClass('item-none')
    })
})