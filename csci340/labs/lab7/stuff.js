$(document).ready(function(){
  $("#clicker").click(function(){
    $.ajax({
      datatype: "json",
      url: "https://www.boredapi.com/api/activity/",
      success: function(results){
        $(".thing").text(results["activity"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
  $("#funnyClicker").click(function(){
    $.ajax({
      datatype: "json",
      url: "https://official-joke-api.appspot.com/random_joke",
      success: function(results){
        $(".funny").text(results["setup"]);
        $(".punchline").text(results["punchline"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
  $("#setupClicker").click(function(){
    $.ajax({
      datatype:"json",
      url: "https://official-joke-api.appspot.com/random_joke",
      success: function(results){
        $(".funny").text(results["setup"]);
        $(".punchline").text(" ");
        },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
  $("#pupClicker").click(function(){
    $.ajax({
      datatype:"json",
      url: "https://random.dog/woof.json",
      success: function(results){
        console.log(results["url"]);
        if (results["url"].endsWith(".mp4")) {
          $('#puppy').attr("src", "blank.png");
        } else {
          $('#puppy').attr("src", results["url"]);
        }
      },
      error: function(xhr,status,error){
        console.log(error);
      }
    });
  });
});
