/*Create a constructor function called BankAccount that takes accountNumber, name, type, and 
balance as arguments.*/

function BankAccount(ac,n,t,bal){
    this.BankAccount=ac;
    this.name=n;
    this.type=t;
    this.balance=bal
}

/*Add the following methods to the BankAccount prototype:
deposit(amount) - Deposits the specified amount into the account.
withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
checkBalance() - Prints the account's balance.
isActive() - Checks and returns whether the account is active.*/

BankAccount.prototype.deposite = function(value){
    this.balance=this.balance+value
}

BankAccount.prototype.withdraw = function(value){
    if(this.balance < value){
        console.log("insuficient balnce")
    }else{
        this.balance =this.balance-value
    }
}

BankAccount.prototype.checkBalance= function(){
    console.log(this.balance)
}

BankAccount.prototype.isActive = function(value){
    console.log("Account is Active")
}

let p1 = new BankAccount(12345,"Priyesh","saving",5000000000);
let p2 = new BankAccount(147395,"Rishabh","saving",9700000000)

p1.deposite(10)


console.log(p1)