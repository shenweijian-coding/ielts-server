const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

/**
 * db.createCollection('chapters')  
 * {
 *  id: 1,
 *  name: '1-1',
 *  bookId: 1,
 *  words: [{ zh: '中文', en: 'english'  }]
 * }
 * 
 *   db.chapters.insert({  
  "name": "1-1",  
  "bookId": 1,
  "words": [  
    {  
      "zh": "中文",  
      "en": "english"  
    },  
    {  
      "zh": "明星",  
      "en": "star"  
    }
  ]  
})
 */

const initSchema = new Schema({
  id: Number,
  name: String,
  bookId: Number,
  words: Array
}, { collection: 'chapters', versionKey: false })

const model = mongoose.model('chapters', initSchema)

module.exports = model;