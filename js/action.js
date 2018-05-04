$(document).ready(function(){

    $(window).scroll(function(){
        var toppos=$(window).scrollTop();
        if(toppos>=1430){
            $("#about-img").css({
                "transition":"1s",
                "transform": "translateX(0)",
                "opacity":"1"
            });
            $("#about-text").css({
                "transition":"1s",
                "transform": "translateX(0)",
                "opacity":"1"
            });
        }
        if(toppos>=2060){
            $(".project-container").css({
                "transform": "translateY(0)",
                "opacity":"1"
            })
        }
    });
    
    
        
    
    var scrolllink=$(".nav-link");
    
    scrolllink.click(function(e){
        e.preventDefault();
        $('html,body').animate({
            'scrollTop':$(this.hash).offset().top
        }, 1000 );
    });
                    
});