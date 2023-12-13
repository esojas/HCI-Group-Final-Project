$(document).ready(function(){
  $("#dog").click(function(){
    $(".cat").hide();
    $(".dog").show();
  });
  $("#cat").click(function(){
    $(".dog").hide();
    $(".cat").show();
  });
})

$("#subcribe").click(function(){
  var email = $("#email1").val();

  if (email == "") {
      swal({
          title: "Subcription Failed",
          text: "Fill in the blanks",
          icon: "error",
          button: "Continue",
        });

  }else{
      swal({
          title: "Subcription Successful!",
          icon: "success",
          button: "Continue",
        });
  }
})

