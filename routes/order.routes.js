const express = require('express')
const { get_All_order , add_order, delete_order, set_order_shipped, get_order_processing } = require('../controllers/order.controller')
const {  check_IF_admin } = require('../middlewares/checkRol.middleware')
const { checkAuth, getUser } = require('../middlewares/auth.middlewares')
const order_Route = express.Router()

order_Route.route('/order').post(add_order).get(checkAuth,getUser,check_IF_admin,get_All_order).put(checkAuth,getUser,check_IF_admin,set_order_shipped)
order_Route.route('/order/:id').delete(checkAuth,getUser,check_IF_admin,delete_order)
order_Route.route('/order/processing').get(checkAuth,getUser,check_IF_admin,get_order_processing)

module.exports = {order_Route}