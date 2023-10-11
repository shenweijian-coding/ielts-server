const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

/**
 * 
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
 * db.books.insert({  
    "id": "1",  
    "name": "托福红宝书",  
    "chapters": [  
      "1-1",  
      "1-2",  
      "2-1",
    ]  
  })

  db.chapters.insert({  
  "_id": "chapter_id",  
  "name": "Chapter Name",  
  "bookId": "book_id", // 与书籍集合中的书籍标识符对应  
  "words": [  
    {  
      "word": "Word1",  
      "translation": "Translation1"  
    },  
    {  
      "word": "Word2",  
      "translation": "Translation2"  
    },  
    // ... 更多单词和翻译对  
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