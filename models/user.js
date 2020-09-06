const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    first: {
        type: String,
    },
    last: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    },
    createdDate: {
        type: Date,
        defaulte: Date.now
    }
})
const collectionName = 'users';
const User = mongoose.model('Buddy', userSchema, collectionName);

module.exports = User;