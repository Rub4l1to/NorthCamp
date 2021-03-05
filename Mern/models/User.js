let mongoose = require('mongoose');

let UserSChema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
    registration_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', UserSChema);