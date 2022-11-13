$(document).ready(function () {
  $("#design-icon").click(function(){
    $("#product-management").css("display", "none");
    $("#development").css("display", "none");
    $("#design").show();
  });
  $("#dev-icon").click(function(){
    $("#development").show();
    $("#design").css("display", "none");
    $("#product-management").css("display", "none");
  });
  $("#product-icon").click(function(){
    $("#product-management").show();
    $("#development").css("display", "none");
    $("#design").css("display", "none");
  });
});
