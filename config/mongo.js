// config/mongo.js
const mongoose = require('mongoose').set('debug', false); //生产环境设置成false
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    readPreference: 'primary',
    directConnection: true,
    authSource: 'admin'
}

const dbUrl = 'mongodb://127.0.0.1:27017/'

const dbName = 'ielts-db'

module.exports = {
    connect: () => {
        mongoose.connect(dbUrl + dbName, options)
        let db = mongoose.connection
        db.on('error', console.error.bind(console, '连接错误:'));
        db.once('open', () => {
            console.log('数据库连接成功');
        })
    }
}