const express= require("express")
const {ImageGeneratorAI} = require("../Controller/ImageGentController.js")
const router=express.Router()

router.post("/imagegeneratorai",ImageGeneratorAI )

module.exports=router;