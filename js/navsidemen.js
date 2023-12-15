
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}



$("#submit").click(function(){
    var password = $("#password").val();
    var email = $("#email").val();

    if (password == "" || email == "") {
        swal({
            title: "Log in Failed",
            text: "Account doesnt exist",
            icon: "error",
            button: "Continue",
          });

    }else{
        swal({
            title: "Log in Success",
            icon: "success",
            button: "Continue",
          });
    }
})

$("#create").click(function(){
    var password = $("#password").val();
    var email = $("#email").val();
    var password2 = $("#password2").val();

    if (password !== password2 || email == "") {
        swal({
            title: "Create Account Failed",
            text: "Fill in the blanks or Password does not match",
            icon: "error",
            button: "Continue",
          });

    }else{
        swal({
            title: "Account Created",
            icon: "success",
            button: "Continue",
          });
    }
})

$("#send").click(function(){
    var password = $("#password").val();
    var email = $("#email").val();
    var password2 = $("#password2").val();

    if (password !== password2 || email == "") {
        swal({
            title: "Failed To Send Email",
            text: "Fill in the blanks or Password does not match",
            icon: "error",
            button: "Continue",
          });

    }else{
        swal({
            title: "Email Sent",
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
