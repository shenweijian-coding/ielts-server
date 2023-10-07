const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const initSchema = new Schema({

}, { collection: 'users', versionKey: false })

const model = mongoose.model('users', initSchema)

module.exports = model;