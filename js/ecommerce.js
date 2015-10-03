/*
*   Product view
*/
/* product preview */
var quantity = 1;
var size = null;
var color = null;
$(".thumbnail").click(function() {
    var url = $(this).css('background-image');
        url = url.replace('url(','').replace(')','');
    $("#main_photo").attr("src", url );
});
/* Quantity bar*/
$("#plus-button").click(function() {
    var quantity = document.getElementById('quantity-input');
    quantity.value++;
});
$("#minus-button").click(function() {
    var quantity = document.getElementById('quantity-input');
    if( quantity.value > 1 )
      quantity.value--;
});
// Obtener detalles del producto
var selectedSize  = null;
$(".size-item").click(function() {
    size = $(this).text();
});
$(".color-item").click(function() {
    color = $(this).text();
});
function getQuantity(){
    var regex = /^\d+$/g;
    quantity = $('#quantity-input').val();
    if( !regex.test(quantity) )
        alert("Por favor ingrese una cantidad correcta");
    else if( quantity < 1 )
        alert("Por favor ingrese una cantidad correcta");
}

// Solicitud para añador al carrito de compras
$("#add-to-shopping-cart-button").click(function() {
    getQuantity();
    $.ajax({
      method: "GET",
      url: "TODO",
      data: {
          //To do
      }
    })
      .done(function( msg ) {
        alert( "Data Saved: " + msg );
      });
});
