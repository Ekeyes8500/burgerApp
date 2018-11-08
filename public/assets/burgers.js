$(document).ready(function(){
    //this handles if the user clicks on a button to change the state of the burger
    $(".change-state").on("click", function(event) {
        var id = $(this).data("id");
        //captures current state of data
        var newState = $(this).data("newstate");
        //parses the state to be set up in mysql boolean fashion (0 = false, 1 = true)
        var stateParse;
        if (newState === false){
          stateParse = 1;
        } else if (newState === true) {
          stateParse = 0;
        }
    
        var newEatState = {
          devoured: stateParse
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newEatState
        }).then(
          function() {
            location.reload();
          }
        );
      });
    
    $("#submitBurger").on("click", function(event){
      event.preventDefault();

      var newBurger = {
        burger_name: $("#burgerInput").val().trim(),
        devoured: 0
      };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    )
    });
});