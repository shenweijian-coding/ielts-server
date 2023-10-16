const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

/**
 * 
 * 
 * db.createCollection('books')  
{
  id: 1,
  name: '托福红宝书',
  chapters: ['1-1','1-2','2-1']
}
 */
const initSchema = new Schema({
  name: String,
  id: Number,
  chapters: Array
}, { collection: 'books', versionKey: false })

const model = mongoose.model('books', initSchema)

module.exports = model;

/**
 * 
 * 
 * db.books.insert({  
    "id": "1",  
    "name": "托福红宝书",  
    "chapters": [  
      "1-1",  
      "1-2",  
      "2-1",
    ]  
  })
db.books.insert({  
    "id": "2",  
    "name": "雅思语料库",  
    "chapters": [  
      "1-1",  
      "2-1",
    ]  
  })


db.chapters.find({   
  bookId: 'book_id',   
  name: '1-1'   
}, {   
  words: { $elemMatch: { bookId: 'book_id', name: '1-1' } }   
})["words"].forEach(function(word) {   
  console.log(word.word + ': ' + word.translation);   
})
 */

/**
 * db.chapters.aggregate([  
  { $unwind: "$words" },  
  {  
    $lookup: {  
      from: "spelling_records",  
      localField: "words.word",  
      foreignField: "word",  
      as: "spelling_records"  
    }  
  },  
  {  
    $group: {  
      _id: { name: "$name", bookId: "$bookId" },  
      words: { $push: { word: "$words.word", zh: "$words.zh", err_total: "$spelling_records.err_total" } }  
    }  
  }  
])
 */