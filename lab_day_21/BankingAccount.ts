abstract class BankingAccount {
    protected balance: number = 0;

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    abstract getBalance(): number;
}

export default BankingAccount;
