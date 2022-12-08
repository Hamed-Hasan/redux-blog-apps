const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogsController');

router.route('/')
.post(blogsController.createTool)
.get(blogsController.getAllBlogs)
module.exports = router;