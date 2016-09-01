// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery
//= require jquery-ui
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .


$(document).on('turbolinks:load',function(){


  function addField () {
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

  $("#addItems").click(function(e){
    e.preventDefault
    addField();
  })

});
