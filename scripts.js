$("document").ready(function () {
    $("#header .fas.fa-bars").on("click", () => {
        $(".nav-links").fadeToggle();
    });
});