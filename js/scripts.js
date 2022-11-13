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

$(document).ready(function () {
  $("#workIcon1").hover(function(){
    $("#work1").show();
  })
  $("#workIcon2").hover(function(){
    $("#work2").show();
  })
  $("#workIcon3").hover(function(){
    $("#work3").show();
  })
  $("#workIcon4").hover(function(){
    $("#work4").show();
  })
  $("#workIcon5").hover(function(){
    $("#work5").show();
  })
  $("#workIcon6").hover(function(){
    $("#work6").show();
  })
  $("#workIcon7").hover(function(){
    $("#work7").show();
  })
  $("#workIcon8").hover(function(){
    $("#work8").show();
  })
});