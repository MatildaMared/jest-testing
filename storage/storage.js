let storedValue;

function store(value) {
	if (value == undefined) {
		throw new Error("Value is undefined");
	}
	storedValue = value;
}

function retrieve() {
	if (storedValue === undefined) {
		throw new Error("No value has been stored...");
	}
	return storedValue;
}

function clear () {
  storedValue = undefined;
}

module.exports = { store, retrieve, clear };
