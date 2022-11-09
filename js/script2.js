$(document).ready(function () {
  $("#blanks form").submit(function () {
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var messageInput = $("input#message").val();
    $(".name").text(nameInput);
    $(".email").text(emailInput);
    $(".message").text(messageInput);

    let text = document.getElementById("feedback").innerText;
    alert(text);

    event.preventDefault();
  });
});

