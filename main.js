'use strict';
const assert = require('assert');


class Transaction {
    constructor(amount, payee) {
        this.amount = amount;
        this.payee = payee;
        this.date = new Date().toDateString();    
    }
}

class BankAccount {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber
        this.owner = owner
        this.transactions = []

    }


    balance() {
        let totalBalance = 0;
        for(let i = 0; i < this.transactions.length; i++) {
        totalBalance += this.transactions[i].amount; 
    } 
    
    return totalBalance;

    }


    deposit(amt) {
        if(amt > 0) {
            this.transactions.push(new Transaction(amt))
        }
    }
       
    
    charge (amt, payee) {
            if(this.balance() > 0) {
                this.transactions.push(new Transaction(-amt, payee))
            } else { return "You cannot charge this account, this transaction would make user balance less than zero." }
    }
}


  


// tests below
if (typeof describe === 'function') {
    
}
describe("#testing account creation", function(){
    it('should create a new account correctly', function(){
        let acct1 = new BankAccount('xx4432', 'James Doe');
        assert.equal(acct1.owner, 'James Doe');
        assert.equal(acct1.accountNumber, 'xx4432');
        assert.equal(acct1.transactions.length, 0)
        assert.equal(acct1.balance(), 0)
    })
})


describe('#testing transaction creation', function(){
    it('should create a transaction correctly for deposit', function(){
        let t1 = new Transaction(30, 'Deposit')
        assert.equal(t1.amount, 30)
        assert.equal(t1.payee, 'Deposit');
        assert.notEqual(t1.date, undefined)
        assert.notEqual(t1.date, null)
        

    })
})

describe('#testing transaction creation', function(){
    it('should create a transaction correctly if it was a charge', function(){
        let t1 = new Transaction(-34.45, 'Target')
        assert.equal(t1.amount, -34.45)
        assert.equal(t1.payee, 'Target');
        assert.notEqual(t1.date, undefined)
        assert.notEqual(t1.date, null)

    })

})

describe("#testing account balance", function(){
    it('should create a new account correctly', function(){
        let acct1 = new BankAccount('xx4432', 'James Doe');
        assert.equal(acct1.balance(), 0);
        acct1.deposit(100)
        assert.equal(acct1.balance(), 100)
        acct1.charge(40)
        assert.equal(acct1.balance(), 60)

        
    })
})


   

