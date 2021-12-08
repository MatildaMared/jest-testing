const { convertFahrenheitToCelsius } = require("./fahrenheit.js");

describe("function convertFahrenheitToCelsius", () => {
	it("convert degrees in fahrenheit to celsius and return the result", () => {
		const testData = 86;
		const expectedTemperature = 30;
		const actualTemperature = convertFahrenheitToCelsius(testData);

		expect(actualTemperature).toBe(expectedTemperature);
	});
});
