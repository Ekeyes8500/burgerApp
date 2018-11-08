$(document).ready(function(){
    $(".change-state").on("click", function(event) {
        var id = $(this).data("id");
        var newState = $(this).data("newstate");

        console.log(newState);

        var stateParse;

        if (newState === 'true'){
            stateParse = 1;
        }
        if (newState === "false") {
            stateParse = 0;
        }
    
        var newEatState = {
          devoured: stateParse
        };

        console.log(newEatState)
    
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
})