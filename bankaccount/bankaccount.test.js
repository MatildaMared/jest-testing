const { deposit, withdraw } = require("./bankaccount");

describe("Bank functions", () => {
	describe("function deposit", () => {
		it("should increase balance by provided amount", () => {
			const testAccount = {
				id: "900707",
				balance: 120,
			};
			const testAmount = 60;
			const expectedBalance = testAccount.balance + testAmount;

			deposit(testAccount, testAmount);

			expect(testAccount.balance).toBe(expectedBalance);
		});

		it("should throw an error for invalid account object", () => {
			const testAccounts = [null, {}, { id: "900707" }, { balance: 120 }];
			const testAmount = 100;

			testAccounts.forEach((testAccount) => {
				expect(() => deposit(testAccount, testAmount)).toThrow();
			});
		});

		it("should throw an error when the provided amount is not of type number", () => {
			const testAccount = {
				id: "900707",
				balance: 50,
			};
			const testAmount = "50kr";
			expect(() => deposit(testAccount, testAmount)).toThrow();
		});

		it("should throw an error when amount is negative", () => {
			const testAccount = {
				id: "900707",
				balance: 0,
			};
			const testAmounts = [-100, Infinity, NaN];
			testAmounts.forEach((amount) => {
				expect(() => deposit(testAccount, amount)).toThrow();
			});
		});
	});

	describe("function withdraw", () => {
		// Minskar saldot på kontot med amount, förutsatt att det finns tillräckligt med pengar på kontot.
		// Om det inte gör det ska funktionen inte dra några pengar utan i stället kasta ett Error med ett
		// lämpligt felmeddelande.Samma sak om amount är ett otillåtet tal.
		it("should decrease balance by provided amount", () => {
			const testAccount = {
				id: "900707",
				balance: 120,
			};
			const testAmount = 50;
			const expectedBalance = testAccount.balance - testAmount;
			withdraw(testAccount, testAmount);
			expect(testAccount.balance).toBe(expectedBalance);
		});
	});
});
