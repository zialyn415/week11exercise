$("#hide").click(function(){
    $("img").hide();
});

$("#show").click(function(){
    $("img").show();
});
$("#toggle").click(function(){
    $("img").toggle();
});

// number 9
$("#fade").click(function(){
    $("img").toggleClass("toggleFade");
});

// number 10
$(document).ready(function(){
$("img").hover(function() {
$( 'img' ).attr("src","img/deedee.png");
}, function() {
});
}
);