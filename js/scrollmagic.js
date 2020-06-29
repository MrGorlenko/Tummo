$(document).ready(function(){

    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() >= $('.world').offset().top - 500) {
                $(".tummo").addClass('act')
                $(".second").addClass('line-active')
            } else {
                $(".tummo").removeClass('act')
                $(".second").removeClass('line-active')
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
                $('.third').addClass('line-active')
            } else {
                $(".silk-link").removeClass('act')
                $('.third').removeClass('line-active')
            }
        });
    });

    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() >= $('#gallery').offset().top-300) {
                $(".gallery-link").addClass('act')
                $('.forth').addClass('line-active')
            } else {
                $(".gallery-link").removeClass('act')
                $('.forth').removeClass('line-active')
            }
        });
    });



})