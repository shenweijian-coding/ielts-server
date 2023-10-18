const router = require('koa-router')()
const user = require('../controller/users')

router.prefix('/user')

router.get('/getUserInfo', user.getUserInfo.bind(user))

// 用户登录
router.post('/login', user.login.bind(user))

// 保存用户配置
router.post('/saveConfig', user.saveConfig.bind(user))


module.exports = router
