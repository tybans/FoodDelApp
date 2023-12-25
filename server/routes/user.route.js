const express = require('express');
const routes = express.Router();

const usersData = require('../controllers/user.controller');
// const { body, validationResult } = require('express-validator')

// const postValidation = ()=>{
//     body('email').isEmail(),
//     body('username').isLength({min:5}),
//     body('password').isLength({min:5})
// }

routes.post('/', usersData.addUserDataControler)
routes.get('/', usersData.getUserDataController)
routes.get('/:id', usersData.getUserDataByIdController)

module.exports = routes