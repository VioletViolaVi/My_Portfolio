$("document").ready(function () {
	// scrolls back to top
	$(".fas.fa-arrow-up").click(function () {
		window.scrollTo({
			top: 0,
		});
	});

	// shows and hides back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$(".back-to-top-btn").show();
		} else {
			$(".back-to-top-btn").hide();
		}
	});
    

});
