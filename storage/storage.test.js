const { store, retrieve, clear } = require("./storage.js");

describe("Storage functions", () => {
	describe("store", () => {
		// smoke test
		it("does not throw an error(smoke test)", () => {
			const testData = "ekorre";
			store(testData);
		});
		// throws an error for no parameter
		it("throws an error for no parameter", () => {
			expect(() => store()).toThrow();
		});
		// finns otillåtna värden på parametrar?
  });
  
  describe("retrieve", () => {
    beforeEach(() => {
      clear();
    })

		// throws an error if no value has been stored
		it("throws an error if no value has been stored", () => {
			expect(() => retrieve()).toThrow();
		});
		// returns the stored value
		it("returns the stored value", () => {
			const testData = [2, 3, 5];
			store(testData);

			const actualStored = retrieve();

			expect(actualStored).toBe(testData);
		});
		// returns the last stored value
  });
  
	describe("clear", () => {
		// clears the stored value
		it("clears the stored value", () => {
			const testData = "kaka";
			store(testData);
			clear();
			expect(() => retrieve()).toThrow();
		});
	});
});
