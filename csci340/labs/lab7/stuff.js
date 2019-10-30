$(document).ready(function(){
  $("#clicker").click(function(){
    $.ajax({
      datatype: "json",
      url: "https://www.boredapi.com/api/activity/"
      success: function(results){
        $(".thing").text(results["activity"])
      }
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
