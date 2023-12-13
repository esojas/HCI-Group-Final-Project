var btn = document.getElementById('btn')

function leftClick() {
	btn.style.left = '0%'
}

function rightClick() {
	btn.style.left = '50%'
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
  

$("#book").click(function(){
    var name = $("inputPetName").val();
    var size = $("#petsize").val();
    var datein = $("#pickDateIn").val();
    var dateout = $("#pickDateOut").val();
    var address = $("#inputAddress").val();
    var contact = $("#inputContact").val();
    var consultation = $("consutationCheckin").val();
    var training = $("#trainingduration").val();
    var groomtime = $("#timecheckin").val();


if (name == "" || size == "" ||  datein == "" || dateout == "" ||  address == "" ||  contact == "" || consultation == "" ||  training == "" ||  groomtime == "") {
    swal({
        title: "Booking Fail",
        text: "Please fill in the require information",
        icon: "error",
        button: "Continue",
      });
    }

else{
    swal({
        title: "Booking success",
        icon: "success",
        button: "Continue",
      });
    }
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