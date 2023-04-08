const express = require('express')
const UserRoute = express.Router()
const userController = require('../controllers/user.controller')
const { checkemailexist, checkemail } = require('../middlewares/login.middlewares')
const { check_IF_admin } = require('../middlewares/checkRol.middleware')
const { checkAuth, getUser } = require('../middlewares/auth.middlewares')

UserRoute.route('/register').post(checkAuth,getUser,check_IF_admin,checkemail,userController.adduser)
UserRoute.route('/login').post(checkemailexist,userController.login)    

module.exports = {UserRoute};