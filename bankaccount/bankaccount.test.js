const { deposit, withdraw, transfer } = require("./bankaccount");

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

		it("should throw an exception for invalid account object", () => {
			const testAccounts = [null, {}, { id: "900707" }, { balance: 120 }];
			const testAmount = 100;

			testAccounts.forEach((testAccount) => {
				expect(() => deposit(testAccount, testAmount)).toThrow();
			});
		});

		it("should throw an exception when amount is not valid", () => {
			const testAccount = {
				id: "900707",
				balance: 0,
			};
			const testAmounts = ["katt", -100, Infinity, NaN];
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
		it("should throw an exception for invalid account object", () => {
			const testAccounts = [null, {}, { id: "900707" }, { balance: 120 }];
			const testAmount = 100;

			testAccounts.forEach((testAccount) => {
				expect(() => withdraw(testAccount, testAmount)).toThrow();
			});
		});
		it("should throw an exception for invalid amount", () => {
			const testAccount = {
				id: "900707",
				balance: 0,
			};
			const testAmounts = ["katt", -100, Infinity, NaN];
			testAmounts.forEach((amount) => {
				expect(() => withdraw(testAccount, amount)).toThrow();
			});
		});
		it("should throw an exception if amount > balance", () => {
			const testAccount = {
				id: "900707",
				balance: 990,
			};
			const testAmount = 1000;
			expect(() => withdraw(testAccount, testAmount)).toThrow();
		});
	});

	describe("function transfer", () => {
		it("should transfer money from source to target", () => {
			const testSource = { id: 123, balance: 376 };
			const testTarget = { id: 456, balance: 670 };
			const amount = 200;
			const expectedTargetBalance = testTarget.balance + amount;
			const expectedSourceBalance = testSource.balance - amount;

			const actual = transfer(testSource, testTarget, amount);

			expect(testTarget.balance).toBe(expectedTargetBalance);
			expect(testSource.balance).toBe(expectedSourceBalance);
			expect(actual).toBe(true);
		});
		it("should return false for invalid source account", () => {
			const testSource = "bacon";
			const testTarget = { id: 345, balance: 550 };
			const amount = 125;

			const actual = transfer(testSource, testTarget, amount);
			expect(actual).toBe(false);
		});
		it("should return false for invalid target account", () => {
			const testSource = { id: 123, balance: 2370 };
			const testTarget = "hopp";
			const amount = 390;

			const actual = transfer(testSource, testTarget, amount);
			expect(actual).toBe(false);
		});
		it("should return false for invalid amount", () => {
			const testSource = { id: 34234, balance: 3510 };
			const testTarget = { id: 1537, balance: 1230 };

			const testAmounts = ["christmas", -100, Infinity, NaN];

			testAmounts.forEach((amount) => {
				const actual = transfer(testSource, testTarget, amount);
				expect(actual).toBe(false);
			});
		});
		it("should return false if amount > balance", () => {
			const testSource = { id: 394, balance: 990 };
			const testTarget = { id: 987, balance: 1230 };
			const amount = 1000;
			const actual = transfer(testSource, testTarget, amount);
			expect(actual).toBe(false);
		});
	});
});
