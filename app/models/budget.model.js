const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Budget = new Schema({

    grossIncome: {
        type: String
    },

    homeExpenseTotal: {
        type: String
    },

    autoExpenseTotal: {
        type: String
    },

    transportExpenseTotal: {
        type: String
    },

    educationExpenseTotal: {
        type: String
    },

    personalExpenseTotal: {
        type: String
    },

    firstName: {
        type: String
    },

    lastName: {
        type: String
    },

    phoneNumber: {
        type: String
    },

    email: {
        type: String
    }

});

module.exports = mongoose.model('Budget', Budget);