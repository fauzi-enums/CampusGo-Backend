const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router
  .route('/')
  .get(auth('safety'), validate(userValidation.createUser), userController.createUser)

router
  .route('/safety')
  .get(auth('contacts'), validate(userValidation.getUser), userController.getContacts)

module.exports = router;
