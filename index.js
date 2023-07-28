class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
  }
  transactions = [];

  balance() {
    let sum = 0;
    for (const el of this.transactions) {
      sum += el.amt;
    }
    return sum;
  }

  deposit(amt) {
    if (amt > 0) {
      const newDeposit = new Transaction(this.payee, amt);
      this.transactions.push(newDeposit);
    } else {
        return 'Invalid Deposit'
    }
  }

  charge(payee, amt) {
    if (this.balance() + amt >= 0) {
      const newCharge = new Transaction(payee, amt);
      this.transactions.push(newCharge);
    } else {
        return 'Insufficient Funds'
    }
  }
}

class Transaction {
  constructor(payee, amt) {
    this.payee = payee;
    this.amt = amt;
  }
  date = new Date();
}
