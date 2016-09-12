App.total = function () {
  var quantity = $(".quantity");
  var price = $(".price");
  var total = 0

  for (var i = 0; i < quantity.length; i ++) {
    total = (parseInt(quantity[i].value) || 0) * (parseInt(price[i].value) || 0) + total
  }
  return total
}


$(document).on("turbolinks:load", function (){
  $(".tbag").blur(function(){
   $("#total").val(App.total());
  });
});
