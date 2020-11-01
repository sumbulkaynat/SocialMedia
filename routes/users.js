const express = require('express');
const router = express.Router();

const homeController = require('../controllers/user_controller');

router.get('/',homeController.profile);

router.get('/profile',homeController.userProfile);



module.exports = router;