const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogsController');

router.route('/')
.post(blogsController.createTool)

module.exports = router;