$(function() {
  $(".carousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function() {
    if (
      $("#carouselButton")
        .children("i")
        .hasClass("fa-pause")
    ) {
      $(".carousel").carousel("pause");
      $("#carouselButton")
        .children("i")
        .removeClass("fa-pause");
      $("#carouselButton")
        .children("i")
        .addClass("fa-play");
      console.log("worked");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton")
        .children("i")
        .removeClass("fa-play");
      $("#carouselButton")
        .children("i")
        .addClass("fa-pause");
    }
  });

  $("#reserveButton").click(function() {
    $("#reserveModal").collapse("show");
  });
  $("#closeReserveButton").click(function() {
    $("#reserveModal").collapse("hide");
  });
  $("#loginButton").click(function() {
    $("#loginModal").collapse("show");
  });
  $("#closeLoginButton").click(function() {
    $("#loginModal").collapse("hide");
  });
});
