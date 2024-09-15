import BankingAccount from './BankingAccount';

class SavingsAccount extends BankingAccount {
    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

export default SavingsAccount;
