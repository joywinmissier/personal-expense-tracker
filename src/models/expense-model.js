const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    amount: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: Date
    },
    category : {
        required: true,
        type: String,
        enum : ['Food', 'Transport', 'Health', 'Entertainment', 'Others']
    },
    paymentMode : {
        required: true,
        type: String,
        enum : ['Cash', 'Debit Card', 'Credit Card', 'Net Banking', 'UPI', 'Others']
    },
    createdBy: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Expenses', expenseSchema)