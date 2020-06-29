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
                $('#mainNav').removeClass('line-hidden')
            } else {
            }
        });
    });

    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() >= $('#silk').offset().top-300) {
                $(".silk-link").addClass('act')
            } else {
                $(".silk-link").removeClass('act')
            }
        });
    });

    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() >= $('#gallery').offset().top-300) {
                $(".gallery-link").addClass('act')
            } else {
                $(".gallery-link").removeClass('act')
            }
        });
    });



})