$(document).ready(function(){

    $(function(){
        $(document).scroll(function(){
            if($(this).scrollTop() >= $('.world').offset().top - 100) {
                $(".tummo").addClass('act')
            } else {
                $(".tummo").removeClass('act')
            }
        });
    });



})