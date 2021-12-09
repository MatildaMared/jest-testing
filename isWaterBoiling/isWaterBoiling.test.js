const { isWaterBoiling } = require("./isWaterBoiling");

describe("function isWaterBoiling", () => {
	// Returns true if water would be boiling at the specified temperature
	it("should return true if water would be boiling at the specified temperature", () => {
		testValue = 103;
		expectedResult = true;

		actualResult = isWaterBoiling(testValue);
		expect(actualResult).toBe(expectedResult);
	});

	// Returns false if the water would not be boiling at the specified temperature
	it("should return false if the water would not be boiling at the specified temperature", () => {
		const testValue = 70;
		expectedResult = false;

		actualResult = isWaterBoiling(testValue);
		expect(actualResult).toBe(expectedResult);
	});

	// Throws an Error on illegal input
	it("should return an error if provided argument is not a number", () => {
		const testValue = undefined;
		const errorMessage = "Temperature must be a number";

		expect(() => isWaterBoiling(testValue)).toThrow(errorMessage);
	});

	it("throws an error if the temperature provided is too low", () => {
		const absoluteZero = -273.15;
		const errorMessage = "Temperature cannot be below absolute zero";
		expect(() => isWaterBoiling(absoluteZero - 0.01)).toThrow(errorMessage);
	});

	it("throws an error for NaN", () => {
		const testValue = NaN;
		const errorMessage = "Temperature must be a number";
		expect(() => isWaterBoiling(testValue)).toThrow(errorMessage);
	});
});
