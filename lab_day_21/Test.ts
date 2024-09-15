import SavingsAccount from './SavingsAccount';
import CheckingAccount from './CheckingAccount';

const savings = new SavingsAccount();
savings.deposit(100);
savings.withdraw(30);
console.log("Savings Balance:", savings.getBalance());

const checking = new CheckingAccount();
checking.deposit(200);
checking.withdraw(160);
console.log("Checking Balance:", checking.getBalance());
