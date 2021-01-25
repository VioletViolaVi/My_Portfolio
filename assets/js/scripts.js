$("document").ready(function () {
  // scrolls to screen top using btn
  $(".far.fa-caret-square-up").click(function () {
    window.scrollTo({
      top: 0,
    });
  });

  // shows & hides back to top btn
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#backToTop").show();
    } else {
      $("#backToTop").hide();
    }
  });
});
