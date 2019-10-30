$(document).ready(function(){
  $("#clicker").click(function(){
    $.ajax({
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
  $("#funnyClicker").click(function(){
    $.ajax({
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
