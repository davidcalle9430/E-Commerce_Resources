/*
*   Product view
*/
/* product preview */
$(".thumbnail").click(function() {

    var img = document.getElementsByClassName('thumbnail'),
        style = img.currentStyle || window.getComputedStyle(img, false),
        url = style.backgroundImage.slice(4, -1);
        url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    $("#main_photo").attr("src", url );
});
/* Quantity bar*/
$("#plus-button").click(function() {
    var quantity = document.getElementById('quantity_input');
    quantity.value++;
});
$("#minus-button").click(function() {
    var quantity = document.getElementById('quantity_input');
    if( quantity.value > 1 )
      quantity.value--;
});
