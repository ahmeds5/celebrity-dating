$(function(){
  $("#blank form").submit(function(event){

    var inputColor = $("#color").val();
    var inputFood = $("#food").val();
    var inputAge = parseInt($("#age").val());


    if (inputColor && inputAge && inputFood){
      if ( inputColor === "Red" && inputFood === "Italian" && inputAge < 30) {
        $(".celebrity1").show();
      } else if (inputColor === "Green" || inputFood === "Mexican") {
        $(".celebrity2").show();
      } else if (inputColor === "Blue" || inputFood === "Asian"){
        $(".celebrity3").show();
      }
    } else {
      alert("Please pick your color and food and input your age.")
    }

    event.preventDefault();
  })
});
