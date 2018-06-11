$(document).ready(function() {

// number 5
$("#hide").click(function(){
    $("img").hide();
});

$("#show").click(function(){
    $("img").show();
});

// number 6
$("#toggle").click(function(){
    $("img").toggle();
});

// number 9
$("#fade").click(function(){
    $("img").toggleClass("toggleFade");
});

// number 10

$("img").hover(function() {
$( 'img' ).attr("src","img/deedee.png");
}, function() {
	$("img").attr("src", "img/dexter.png")
});


// number 12

$("#add").click(function() {
	$("#list").append("<li>fck off!</li");
});

// number 14
$("#last").click(function() {
	$("body").append("<div id='overlay'></div>");
})

});