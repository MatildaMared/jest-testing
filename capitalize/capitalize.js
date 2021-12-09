function capitalize(string) {
	if (typeof string !== "string") {
		throw new Error("Passed argument is not of type string...");
	} else {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}

module.exports = { capitalize };
