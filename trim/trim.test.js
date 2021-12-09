const { trim } = require("./trim.js");

describe("function trim", () => {
	it("should return the string without leading and trailing whitespace", () => {
		testValue = "   hello world   \n    ";
		expectedValue = "hello world";
		actualValue = trim(testValue);
		expect(actualValue).toBe(expectedValue);
	});

	it("should throw an error if the parameter is not of type string", () => {
		testValue = undefined;
		expect(() => trim(testValue)).toThrow();
	});
});
