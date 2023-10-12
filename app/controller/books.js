const BaseController = require('./BaseController')
const user = require('../models/users')
const book = require('../models/books')
const chapters = require('../models/chapters')

class UsersController extends BaseController {
  constructor(args) {
    super(args);
  }
  static async getBookList(ctx) {
    const res = await book.find()
    ctx.success(res)
  }
  static async getWordList(ctx) {
    const { bookId, chapter } = ctx.request.body
    // 查询某个章节的单词
    const res = await chapters.findOne({ bookId: bookId, name: chapter }, 'words')
    
    ctx.success(res)
  }
  static getUserInfo(ctx) {
    ctx.success({ info: 111 })
  }
}

module.exports = UsersController;
