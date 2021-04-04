describe("myPortfolio", function () {

	describe("Check to see if scrollToTop equates to the number 0.", function () {
		it("It should be 0.", function () {
			expect(scrollToTop(0)).toBe(0);
		});
		it("It should return an error if not supplied with a number.", function () {
			expect(scrollToTop("Hello World!")).toBe("ERROR!");
		});
	});

	describe("Check to see if scrollTop is more than 300.", function () {
		it("It should be more than 300.", function () {
			expect(scrollTop(500)).toBeGreaterThan(300);
		});
		it("It should return an error if the value is not more than 300.", function () {
			expect(scrollTop(200)).toBe("ERROR!");
		});
	});
})