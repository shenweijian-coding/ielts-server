const BaseController = require('./BaseController')
const user = require('../models/users')

class UsersController extends BaseController {
  constructor(args) {
    super(args);
  }
  static async login(ctx) {
    const { username, password } = ctx.request.body
    console.log(username, password);
    const userInfo = await user.findOne({ user: username }).lean()
    if(!userInfo) {
      ctx.fail(0, '没有查到账号信息，请检查账号是否输入正确！')
      return
    }
    if(userInfo.pwd != password) {
      ctx.fail(0, '账号密码不匹配，请重新输入！')
      return
    }
    ctx.success(userInfo)
  }
  // 保存用户的听写配置
  static async saveConfig(ctx) {
    const { authorization } = ctx.request.headers
    const { speed, interval, repeat, pronounce, mode } = ctx.request.body
    await user.updateOne({ _id: authorization }, {
      $set: {
        config: {
          speed, interval, repeat, pronounce, mode
        }
      }
    })
    ctx.success('设置成功')
  }
  static async getUserInfo(ctx) {
    const { authorization } = ctx.request.headers
    if(!authorization) {
      ctx.fail(0, '未登录')
      return
    }
    const userInfo = await user.findOne({ _id: authorization }, { pwd: 0 })
    ctx.success(userInfo)
  }
}

module.exports = UsersController;
