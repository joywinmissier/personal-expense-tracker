const express = require('express');
const userController = require('../controllers/user-management/userController');

const router = express.Router()

router.route('/getAllUsers').get(userController.getAllUsers);
router.route('/getUser/:email').get(userController.getUserByEmail);
router.route('/signupUser').post(userController.createUser);
router.route('/getUser/:id').get(userController.getUserById);
router.route('/updateUser/:id').patch(userController.updateUser);
router.route('/deleteUser/:id').delete(userController.deleteUser);


module.exports = router;