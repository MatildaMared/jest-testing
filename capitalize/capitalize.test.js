const { capitalize } = require("./capitalize");

describe("function capitalize", () => {
	// returns a string with the first letter capitalized
	it("should return a string with the first letter capitalized", () => {
		const testValue = "matilda";
		const expectedValue = "Matilda";

		const actualValue = capitalize(testValue);

		expect(actualValue).toBe(expectedValue);
	});

	// should throw an error if the provided argument is not of type string
	it("should throw an error if the provided argument is not of type string", () => {
		const testValue = 123;
		expect(() => capitalize(testValue)).toThrow();
	});
});
