const express = require('express')
const { get_all_Category , add_Category, delete_category } = require('../controllers/category.controller')
const { check_IF_supervisor_admin, check_IF_admin } = require('../middlewares/checkRol.middleware')
const { checkAuth, getUser } = require('../middlewares/auth.middlewares')
const category_Route = express.Router()

category_Route.route('/category').post(checkAuth,getUser,check_IF_admin,add_Category).get(get_all_Category)
category_Route.route('/category/:id').delete(checkAuth,getUser,check_IF_admin,delete_category)

module.exports = {category_Route}