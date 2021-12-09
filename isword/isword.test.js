const { isWord } = require("./isword.js");

describe("function isWord", () => {
  it("returns true for 'snöröjning'", () => {
    const testInput = "snöröjning";
    const expectedResult = true;

    const actualResult = isWord(testInput);
		
    expect(actualResult).toBe(expectedResult);
	});

	it("returns false if input is not a string", () => {
		const testInput = 1;
		const expectedResult = false;

		const actualResult = isWord(testInput);

		expect(actualResult).toBe(expectedResult);
	});

	it("returns false if the string is empty", () => {
		const testInput = "";
		const expectedResult = false;

		const actualResult = isWord(testInput);

		expect(actualResult).toBe(expectedResult);
	});

	it("returns false if the string contains anything but lowercase and uppercase letters", () => {
		const testInput = "test123";
		const expectedResult = false;

		const actualResult = isWord(testInput);

		expect(actualResult).toBe(expectedResult);
	});
});
