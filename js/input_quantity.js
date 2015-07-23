$("#plus_button").click(function() {
    var quantity = document.getElementById('quantity_input');
    quantity.value++;
});

$("#minus_button").click(function() {
    var quantity = document.getElementById('quantity_input');
    if( quantity.value > 0 )
      quantity.value--;
});

//
var selectedSize  = null;
$(".size_button").click(function() {
    selectedSize = $(this).text();
});

//Ajax
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var f=function loadJSON()
{
   var data_file = "http://45.55.68.26/api/categories/";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser broke!");
            return false;
         }
      }
   }

   http_request.onreadystatechange  = function(){
      if (http_request.readyState == 4  )
      {
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // jsonObj variable now contains the data structure and can
        // be accessed as jsonObj.name and jsonObj.country.
        var it = jsonObj.categories;
        it.forEach(function(entry) {
            alert(entry.name);
        });
      }
   }
   http_request.open("GET", data_file, true);
   http_request.send();
}
f();
