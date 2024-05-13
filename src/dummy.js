export class Bank {
  constructor(bankName, bankBalance) {
    this.bankName = bankName;
    this.bankBalance = bankBalance;
  }
}

const bankUser = new Bank("sun Rise Bank", 20000);

export function Bank(name) {
  let _balance = 0;
  this.name = name;

  this.getBalance = function () {
    return _balance;
  };

  this.setBalance = function (amount) {
    _balance += amount;
  };
}

const App = () => {
  const person = new Bank("ramu");
  person.setBalance(90000);

  console.log(person.getBalance());