// Ökar saldot på kontot med amount. Alla flyttal (floating point, normala JavaScript number)
// som rimligtvis kan tänkas motsvara ett pengabelopp är tillåtna värden.
// Om funktionen får ett otillåtet tal som parameter ska den kasta ett Error med ett lämpligt felmeddelande.
function deposit (account, amount, bank) {
	console.log(bank);
	if (!isAccount(account)) {
		throw new Error("Invalid account object");
	} else if (!isValidNumber(amount)) {
		throw new Error("Amount must be a valid number");
	}
	const oldBalance = bank.getBalance();
	bank.setBalance(oldBalance + amount);
	// account.balance += amount;
}

function isAccount(maybeAccount) {
	if (!maybeAccount) {
		return false;
	} else if (!maybeAccount.id) {
		return false;
	} else if (!isValidNumber(maybeAccount.balance)) {
		return false;
	}
	return true;
}

function isValidNumber(amount) {
	if (
		amount === Infinity ||
		typeof amount !== "number" ||
		amount < 0 ||
		isNaN(amount)
	) {
		return false;
	}
	return true;
}

// Minskar saldot på kontot med amount, förutsatt att det finns tillräckligt med pengar på kontot.
// Om det inte gör det ska funktionen inte dra några pengar utan i stället kasta ett Error med ett
// lämpligt felmeddelande.Samma sak om amount är ett otillåtet tal.
function withdraw(account, amount) {
	if (!isAccount(account)) {
		throw new Error("Invalid account object");
	} else if (!isValidNumber(amount)) {
		throw new Error("Amount must be a valid number");
	} else if (account.balance < amount) {
		throw new Error("Insufficient funds");
	}
	account.balance -= amount;
}

module.exports = { deposit, withdraw };
