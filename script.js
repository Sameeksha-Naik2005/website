$(document).ready(function(){
    $("nav a").hover(function(){
        $(this).css("color", "yellow");
    }, function(){
        $(this).css("color", "white");
    });
});
