const readline = require("readline-sync");

class BankAccount {
    constructor(accountNumber, routingNumber, balance) {
        this.accountNumber = accountNumber;
        this.routingNumber = routingNumber;
        this.balance = balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds.');
        } else {
            this.balance -= amount;
            console.log(`Withdrawal successful. New balance: $${this.balance.toFixed(2)}`);
        }
    }
}

const bankAccount1 = new BankAccount('123456789', '987654321', 1000);

const bankAccount2 = new BankAccount('987654321', bankAccount1.routingNumber, bankAccount1.balance);

const bankAccounts = [bankAccount1, bankAccount2];

function findAccount(accountNumber) {
    return bankAccounts.find(account => account.accountNumber === accountNumber);
}

function showMenu() {
    console.log('=== Banking application ===');
    console.log('1. Find an account');
    console.log('2. Update balance');
    console.log('0. Exit the program');
}

function handleUserInput() {
    let choice;
    do {
        showMenu();
        choice = readline.question('Choose an option: ');
        switch (choice) {
            case '1':
                const accountNumber = readline.question('Enter account number: ');
                const account = findAccount(accountNumber);
                if (account) {
                    console.log(`Account found. Balance: $${account.balance.toFixed(2)}`);
                } else {
                    console.log('Account not found.');
                }
                break;
            case '2':
                const accountNumberForUpdate = readline.question('Enter account number: ');
                const accountForUpdate = findAccount(accountNumberForUpdate);
                if (accountForUpdate) {
                    const amount = parseFloat(readline.question('Enter withdrawal amount: '));
                    if (!isNaN(amount) && amount > 0) {
                        accountForUpdate.withdraw(amount);
                    } else {
                        console.log('Invalid amount.');
                    }
                } else {
                    console.log('Account not found.');
                }
                break;
            case '0':
                console.log('Exiting the program.');
                break;
            default:
                console.log('Invalid option.');
        }
    } while (choice !== '0');
}

handleUserInput();
