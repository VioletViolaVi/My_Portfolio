// waits until DOM has been fully loaded
$("document").ready(function () {
    // hides navbar
  function closingNavbar() {
    $(".fas.fa-times").click(function () {
      $(".fas.fa-times").replaceWith(`
        <div>
            <i class="fas fa-bars"></i>
        </div>`);
      console.log("hello!");
    });
  }
  closingNavbar();

  // shows navbar
  function openingNabar() {
    $(".fas.fa-bars").click(function () {
      $(".fas.fa-bars").replaceWith(`
        <div>
            <i class="fas fa-times"></i>
        </div>`);
      console.log("bye!");
    });
  }
  openingNabar();















});
