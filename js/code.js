$(document).ready(function () {
   $(".shipping-fast").mousemove(function () {
       $(".hover1").css("background-color",'#34ccff');
       $(".shipping-fast").css("background-color",'#34ccff');
   }) ;
    $(".shipping-fast").mouseleave(function () {
        $(".hover1").css("background-color",'#f5f5f5');
        $(".shipping-fast").css("background-color",'#f5f5f5');
    }) ;


    $(".truck").mousemove(function () {
        $(".hover2").css("background-color",'#34ccff');
        $(".truck").css("background-color",'#34ccff');
    }) ;
    $(".truck").mouseleave(function () {
        $(".hover2").css("background-color",'#f5f5f5');
        $(".truck").css("background-color",'#f5f5f5');
    }) ;



    $(".plane").mousemove(function () {
        $(".hover3").css("background-color",'#34ccff');
        $(".plane").css("background-color",'#34ccff');
    }) ;
    $(".plane").mouseleave(function () {
        $(".hover3").css("background-color",'#f5f5f5');
        $(".plane").css("background-color",'#f5f5f5');
    }) ;

    $(".ship").mousemove(function () {
        $(".hover4").css("background-color",'#34ccff');
        $(".ship").css("background-color",'#34ccff');
    }) ;
    $(".ship").mouseleave(function () {
        $(".hover4").css("background-color",'#f5f5f5');
        $(".ship").css("background-color",'#f5f5f5');
    }) ;

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >10) {
            $(".black").css("background" , "#142440").addClass('animate1');
        }

        else{
            $(".black").css("background" , "transparent")
        }
    });

    $("[rel='tooltip']").tooltip();

    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );
});