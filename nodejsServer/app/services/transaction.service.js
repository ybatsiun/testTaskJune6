const Transaction = require("../models/transaction.model.js");
const dbLockService = require("./dbLock.service");


exports.create = async transaction => {
    return new Promise((res, rej) => {
        let newTransaction;
        if (dbLockService.isDbLocked) {
            dbLockService.dbLockNotifier.on("dbUnlocked", function performOperation() {
                //remove listener so cb will be executed once
                dbLockService.dbLockNotifier.removeListener("dbUnlocked", performOperation);
                newTransaction = createTransactionOperation(transaction);
                dbLockService.unlockDb();
                res(newTransaction);
            });
        } else {
            newTransaction = createTransactionOperation(transaction);
            dbLockService.unlockDb();
            res(newTransaction);
        }
    });
};

exports.findAll = () => {
    return performReadOperation(Transaction.getAll)
};

exports.findOne = id => {

    return performReadOperation(() => Transaction.findById(id))
};

exports.getBalance = () => {
    return performReadOperation(getBalanceOperation)
};

exports.checkTransaction = transaction => {
    return performReadOperation(() => checkTransActionOperation(transaction))
};


function getTransacntionGradient(transaction) {
    if (transaction.type === 'credit') {
        return -transaction.amount;
    } else if (transaction.type === 'debit') {
        return transaction.amount;
    }
}

function getBalanceOperation() {
    const transactions = Transaction.getAll();

    return transactions.reduce((balance, transaction) => {
        balance = balance + getTransacntionGradient(transaction);
        return balance;
    }, 0);
}

function checkTransActionOperation(transaction) {
    if (transaction.type === 'debit') {
        return true;
    }
    const futureBalance = getBalanceOperation() + getTransacntionGradient(transaction);
    return futureBalance > 0;
}

function createTransactionOperation(transaction) {
    dbLockService.lockDb();
    return Transaction.create(transaction);
}

function performReadOperation(operation) {
    return new Promise((res, rej) => {
        if (dbLockService.isDbLocked) {
            dbLockService.dbLockNotifier.on("dbUnlocked", function performOperation() {
                res(operation());
            });
        } else {
            res(operation());
        };
    });
}

