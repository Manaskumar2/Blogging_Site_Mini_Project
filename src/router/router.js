
const express = require('express')

const router = express.Router()
const {createAuthor,loginAuthor}= require('../controller/authorController.js')
const {createblog,getBlogByQuery,updateBlogById,deleteUser,deleteByQuery}= require("../controller/blogcontroller")


router.post('/authors',createAuthor)

router.post("/login",loginAuthor)
router.post('/blogs',createblog)
router.get('/blogs',getBlogByQuery)

router.put('/blogs/:blogId',updateBlogById)
router.delete("/blogs/:blogId",deleteUser)
router.delete("/blogs",deleteByQuery)
module.exports = router
