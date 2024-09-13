$(document).ready(function(){

    $('.first').click(function(){
        $('.Box').css('display' , 'block')
     })
    
     $('#btn').click(function(){
        $('.Box').css('display' , 'none')
     })
    
    
    $('.mainMenu li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown(500);
    })
    
    $('.mainMenu li').mouseout(function(){
        $(this).find('.subMenu').stop().slideUp(500);
    })
    
    
    
    function move(){
        $('#imgs').animate({marginTop: -300},
            function(){
                $('#imgs li:first').appendTo('#imgs');
                $('#imgs').animate({marginTop: 0},0)
            }
        )
    }
    
    setInterval(move,3000)
});
