App.auto = function() {

        $( ".tags" ).autocomplete({
          source: function (request, response){
            $.ajax({
              url: "/orders/list",
              dataType: "json",
              data: {
                q: request.term
              },
              success: function(data) {
                console.log(data)
                response( data.length === 1 && data[ 0 ].length === 0 ? [] : data );
              },
              failure: function(data) {
                console.log(data)
              }
            });
          }
        });
      } ;

      $(document).on("turbolinks:load", function(){
        App.auto();
      });
