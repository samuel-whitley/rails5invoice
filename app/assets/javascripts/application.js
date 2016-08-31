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

    idAttr = "order_products_attributes_0_name".replace("0",mSec)
    nameAttr = "order[products_attributes][0][name]".replace("0",mSec)

    var li = $("<li></li>")
    var input = $("<input></input>")

    input.attr({
      type: "text",
      id: idAttr,
      name: nameAttr
    })

    input.addClass("form-control");

    li.append(input);
    var list = $("#nameList")
    list.append(li);

  }

  $("#addItems").click(function(e){
    e.preventDefault
    addField();
  })

});
