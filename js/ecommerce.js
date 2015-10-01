/*
*   Product view
*/
/* product preview */
$(".thumbnail").click(function() {
    var url = $(this).css('background-image');
        url = url.replace('url(','').replace(')','');
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
/*Add to shopping cart request*/
$("#add-to-shopping-cart-button").click(function() {
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
