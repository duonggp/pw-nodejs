import BankingAccount from './BankingAccount';

class CheckingAccount extends BankingAccount {
    private minimumBalance: number = 50;

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (this.balance - amount >= this.minimumBalance) {
            this.balance -= amount;
        } else {
            console.log("Cannot withdraw, minimum balance must be maintained");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

export default CheckingAccount;
