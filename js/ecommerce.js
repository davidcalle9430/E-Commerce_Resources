/*
*   Product view
*/
/* product preview */
$(".thumbnail").click(function() {

    var img = document.getElementsByClassName('thumbnail');
    console.log(img);
    var style = img.currentStyle || window.getComputedStyle(img, false);
    var url = style.backgroundImage.slice(4, -1);
        url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    console.log("url = "+url);
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
