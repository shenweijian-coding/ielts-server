const router = require('koa-router')()
const user = require('../controller/users')

router.prefix('/user')

router.get('/getInfo', user.getUserInfo.bind(user))

// 用户登录
router.post('/login', user.login.bind(user))

module.exports = router
