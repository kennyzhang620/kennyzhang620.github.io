$(document).ready(function(){
    $(".seat_sections a").hover(
        function(){ // When mouse pointer enters the anchor
            $("#seatingImage").stop().animate({opacity: 1}, "slow"); // This will fade out the background slowly over 2 seconds
        },
        function(){ // When mouse pointer leaves the anchor
            $("#seatingImage").stop().animate({opacity: 0.01}, "slow"); // This will fade in the background slowly over 2 seconds
        }
    );
});