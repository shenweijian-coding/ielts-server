const router = require('koa-router')()
const book = require('../controller/books')

router.prefix('/book')

router.get('/getBookList', book.getBookList.bind(book))

router.post('/getWordList', book.getWordList.bind(book))


module.exports = router
