const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogsController');

router.route("/")
.post(blogsController.createTool)
.get(blogsController.getAllBlogs)

router.route("/:id")
.get(blogsController.getBlogDetail)
.delete(blogsController.deleteSingleBlog)
.patch(blogsController.updateSingleBlog)
module.exports = router;