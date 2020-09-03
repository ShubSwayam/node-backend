const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String,
        // require: true
    },
    password: {
        type: String
    },
    mobile: {
        type: Number
    },
    address: {
        type: String
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', User)