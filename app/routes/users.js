const router = require('koa-router')()
const user = require('../controller/users')

router.prefix('/user')

router.get('/getInfo', user.getUserInfo.bind(user))

module.exports = router
