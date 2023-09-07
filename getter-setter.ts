class BankAccount {
  readonly id: Number;
  name: String;
  private balance: Number;

  constructor(id: Number, name: String, balance: Number) {
    this.id = id;
    (this.name = name), (this.balance = balance);
  }

  //   gettet
  get balances(): Number {
    return this.balance;
  }
  //   getBalance() {
  //     console.log(this.balance);
  //   }

  // setter
  set addDeposite(amount: any) {
    this.balance = this.balance + amount;
  }
  //   deposit(amount: any) {
  //     this.balance = this.balance + amount;
  //   }
}

const myAccount = new BankAccount(111, "nizam", 25000);
// myAccount.balances;
console.log(myAccount.balances);
