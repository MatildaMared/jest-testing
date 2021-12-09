function isWaterBoiling(degreesCelsius) {
	if (typeof degreesCelsius !== "number") {
		throw new Error("Temperature must be a number");
	} else if (isNaN(degreesCelsius)) {
		throw new Error("Temperature must be a number");
	} else if (degreesCelsius < -273.15) {
		throw new Error("Temperature cannot be below absolute zero");
	}
	return degreesCelsius >= 100;
}

module.exports = { isWaterBoiling };
