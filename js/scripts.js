// waits until DOM has been fully loaded
$("document").ready(function () {
  // slides navbar in/out
  $(".icon.fas.fa-bars").click(function () {
    $("#navContainer").toggleClass("active");     
  });
});
