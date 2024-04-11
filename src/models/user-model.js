const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    country : {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    gender: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Users', usersSchema)