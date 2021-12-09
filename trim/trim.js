function trim(string) {
	if (typeof string === "string") {
		return string.trim();
	} else {
		throw new Error("The passed argument is not of type string...");
	}
}

module.exports = { trim };
