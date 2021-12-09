function isWord(input) {
	if (typeof input !== "string") {
		return false;
	}
	if (input === "") {
		return false;
	}
	if (!input.match(/^[a-öA-Ö]+$/)) {
		return false;
	}

	return true;
}

module.exports = { isWord };
