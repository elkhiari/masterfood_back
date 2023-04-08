const express = require('express')
const { add_product, get_product_By_Category,get_product, get_All_product,delete_product } = require('../controllers/product.controller')
const { checkAuth, getUser } = require('../middlewares/auth.middlewares')
const { check_IF_admin } = require('../middlewares/checkRol.middleware')
const product_Route = express.Router()

product_Route.route('/product').post(checkAuth,getUser,check_IF_admin,add_product).get(get_All_product)
product_Route.route('/product/category/:id').get(get_product_By_Category)
product_Route.route('/product/:id').get(get_product).delete(checkAuth,getUser,check_IF_admin,delete_product)

module.exports = {product_Route}