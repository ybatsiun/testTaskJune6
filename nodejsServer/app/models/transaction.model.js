const shortid = require('shortid');
const {storage} = require("../db");

const Transaction = function (customer) {
    this.email = customer.email;
    this.name = customer.name;
    this.active = customer.active;
};

Transaction.create = (newTransaction) => {
    storage.push({
        id: shortid.generate(),
        effectiveDate: new Date(),
        ...newTransaction
    });
    return storage;
};

Transaction.findById = (transactionId) => {
    return storage.find(transaction => transaction.id === transactionId);
};

Transaction.getAll = () => storage;

module.exports = Transaction;
