const BaseController = require('./BaseController')

class UsersController extends BaseController {
  constructor(args) {
    super(args);
  }
  static getUserInfo(ctx) {
    ctx.success({ info: 111 })
  }
}

module.exports = UsersController;
