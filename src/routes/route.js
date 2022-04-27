const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const blogController= require("../controllers/blogController")





router.post("/author", authorController.createAuthor)
router.post("/blog", blogController.createblog)
router.get("/blogs", blogController.getdata)




 module.exports = router;