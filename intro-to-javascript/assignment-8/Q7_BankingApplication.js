class BankAccount {
  #balance;
  constructor(initialBalance=0) {
    if (initialBalance<0) throw new Error("Initial balance cannot be negative.");
    this.#balance=initialBalance;
  }
  deposit(amount) {
    if (typeof amount!=="number" || amount<=0) throw new Error("Deposit must be a positive number.");
    this.#balance+=amount;
    console.log(`Deposited Rs. ${amount}`);
  }
  withdraw(amount) {
    if (typeof amount!=="number" || amount<=0) throw new Error("Withdrawal must be a positive number.");
    if (amount>this.#balance) throw new Error("Insufficient balance.");
    this.#balance-=amount;
    console.log(`Withdrawn Rs. ${amount}`);
  }
  getBalance() { return this.#balance; }
}
const account=new BankAccount(5000);
account.deposit(1500);
console.log("Current balance: Rs.",account.getBalance());
try { account.withdraw(10000); } catch(error) { console.log("Transaction failed:",error.message); }
console.log("Final balance: Rs.",account.getBalance());
// #balance is private and cannot be accessed directly outside the class.
