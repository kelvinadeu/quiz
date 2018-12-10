 var sum=0
function Result(){
var questions=["q1","q2","q3","q4","q5"];
questions.forEach(function(question){
  var userValue=$("input:radio[name="+question+"]:checked").val();
      if( userValue ==="20"){
        sum+=20;
      }
});
}
$(document).ready(function(){
  $("#start").click(function() {
   $(".form").show();
 })
 $("#submit").click(function() {
     event.preventDefault();
     $("#result").show();
     $(".form").hide();
     score();
     if(sum <= 60) {
       $(".name-display").text(`Pull up your socks!`);

     }
     else {
       $(".name-display").text(`Congratulations!`);

     }
     $(".reusltDisplays").text(sum + "/100");
   })


});
