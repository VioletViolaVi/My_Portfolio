$("document").ready(function () {
    // toggles nav links
    $("#header .fas.fa-bars").on("click", () => {
        $("#header .nav-links a").fadeToggle();
    });

    // goes back to top
    $("#backToTopIcon").on("click", () => {
        window.scrollTo({
            top: 0,
        });
    });

    // toggles back to top btn
    $(window).on("scroll", () => {
        if ($(this).scrollTop() > 300) {
            $("#backToTopAside").show();
        } else {
            $("#backToTopAside").hide();
        }
    });
});