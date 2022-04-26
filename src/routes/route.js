const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const blogController= require("../controllers/blogController")





router.post("/author", authorController.createAuthor)
router.post("/blog", blogController.createblog)



//  router.post("/developers", devController.createDev)

// // router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/batches", programController.createProgram)

//  router.get("/scholarship-developers", devController.scholars)

//  router.get("/developers", devController.getstudents)

 module.exports = router;