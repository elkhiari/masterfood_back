const express = require('express')
const Rol = require('../controllers/Rol.controller')
const RolRoute = express.Router()

RolRoute.route('/').post(Rol.AddRol).get(Rol.getAllRol)

module.exports = {RolRoute}