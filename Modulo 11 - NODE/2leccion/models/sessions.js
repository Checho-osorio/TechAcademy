'use stric'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSessionsSchema = Schema(
    {
        user_id: { type: String, require: true, unique: true},
        jwt: String
    }
);

module.exports = mongoose.model('sessions', UserSessionsSchema)