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
    $("#work1").css("display","block");
  },
  function () {
    $("#work1").css("display","none");
  })
  $("#workIcon2").hover(function(){
    $("#work2").css("display","block");
  },
  function () {
    $("#work2").css("display","none");
  })
  $("#workIcon3").hover(function(){
    $("#work3").css("display","block");
  },
  function () {
    $("#work3").css("display","none");
  })
  })
  $("#workIcon4").hover(function(){
    $("#work4").css("display","block");
  },
  function () {
    $("#work4").css("display","none");
  })
  $("#workIcon5").hover(function(){
    $("#work5").css("display","block");
  },
  function () {
    $("#work5").css("display","none");
  })
  $("#workIcon6").hover(function(){
    $("#work6").css("display","block");
  },
  function () {
    $("#work6").css("display","none");
  })
  $("#workIcon7").hover(function(){
    $("#work7").css("display","block");
  },
  function () {
    $("#work7").css("display","none");
  })
  $("#workIcon8").hover(function(){
    $("#work8").css("display","block");
  },
  function () {
    $("#work8").css("display","none");

});