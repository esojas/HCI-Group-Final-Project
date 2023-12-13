var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});

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