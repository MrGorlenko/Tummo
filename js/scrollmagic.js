$(document).ready(function(){

    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() >= $('.world').offset().top - 500) {
                $(".tummo").addClass('act')
            } else {
                $(".tummo").removeClass('act')
            }
        });
    });

    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() >= $('#art').offset().top-500) {
                $(".art-link").addClass('act')
                $('#mainNav').addClass('line-hidden')
            } else {
                $(".art-link").removeClass('act')
                $('#mainNav').removeClass('line-hidden')
            }
        });
    });

    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() >= $('#silk').offset().top-1300) {
                // $(".art-link").addClass('act')
                $('#mainNav').removeClass('line-hidden')
                // alert('yo')
                console.log('yo')
            } else {
                // $(".art-link").removeClass('act')
                // $('#mainNav').removeClass('line-hidden')
            }
        });
    });



})