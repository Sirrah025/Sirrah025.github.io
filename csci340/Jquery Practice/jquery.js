$( document ).ready(function(){

  var color = 1;
  var onButtonClick = function(){

    if (color > 2){
      $("#light").css("background-color","red");
      color = 0;
    }
    if (color == 1){
      $("#light").css("background-color","yellow");
    }
    if (color == 2){
      $("#light").css("background-color","green");
    }
    color++
    console.log(color);
  }

  $("#clicker").click(onButtonClick)
});
