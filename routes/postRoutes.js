const express = require('express');
const router = express.Router();
const {postData} = require('../controllers/post_controller');


router.post('/post', postData);


module.exports = router;