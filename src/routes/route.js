const express = require('express');
const router = express.Router();

const programController= require("../controllers/programController")
const devController= require("../controllers/developerController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

 router.post("/developers", devController.createDev)

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/batches", programController.createProgram)

 router.get("/scholarship-developers", devController.scholars)

 router.get("/developers", devController.getstudents)

module.exports = router;