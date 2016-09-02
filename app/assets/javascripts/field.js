App.addField = function () {

    var time = new Date();
    var mSec = time.getTime();

    var idAttrName = "order_products_attributes_0_name".replace("0",mSec)
    var nameAttrName = "order[products_attributes][0][name]".replace("0",mSec)

    var idAttrQuantity = "order_products_attributes_0_quantity".replace("0",mSec)
    var nameAttrQuantity = "order[products_attributes][0][quantity]".replace("0",mSec)

    var idAttrPrice = "order_products_attributes_0_price".replace("0",mSec)
    var nameAttrPrice = "order[products_attributes][0][price]".replace("0",mSec)

    var divQuanity = $("<div></div>");
    var divPrice = $("<div></div>");
    var divName = $("<div></div>");

    var inputQuanity = $("<input></input>");
    var inputPrice = $("<input></input>");
    var inputName = $("<input></input>");

    inputName.attr({
      type: "text",
      id: idAttrName,
      name: nameAttrName
    })

    inputQuanity.attr({
      type: "text",
      id: idAttrQuantity,
      name: nameAttrQuantity
    })

    inputPrice.attr({
      type: "text",
      id: idAttrPrice,
      name: nameAttrPrice
    })

    inputName.addClass("form-control");
    divQuanity.addClass("col-xs-4");
    divPrice.addClass("col-xs-4");
    divName.addClass("col-xs-4");

    inputQuanity.addClass("form-control");
    inputName.addClass("tags")
    inputPrice.addClass("form-control");

    divQuanity.append(inputQuanity);
    divPrice.append(inputPrice);
    divName.append(inputName);


    var list = $("#product_list")
    list.append(divQuanity,divPrice,divName);

  }


  $(document).on("turbolinks:load", function(){
    App.auto();

      $("#addItems").click(function(e){
        e.preventDefault
        App.addField();
        App.auto();
      })

  });
