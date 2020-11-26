function scrollToTop(topScroll) {
	if (typeof topScroll == "number") {
		return topScroll;
	} else {
		return "ERROR!";
	}
}

function scrollTop(windowsTopScroll) {
	let windowsScrollTop = 500;
	if (windowsTopScroll > 300) {
		return windowsTopScroll;
	} else {
		return "ERROR!";
	}
}
