const router = require('express').Router();
const userController = require('../controllers/user.controller.js')

router.post('/user', userController.create);

module.exports = router;