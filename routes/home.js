const express = require('express');

const router = express.Router();

const getHomeController = require('../controllers/getHome')

// get method to get all laptop details 
router.get("/getList",getHomeController.getHome );

// redirecting home route

router.get("/",(req,res)=>{
    res.redirect("/getList")
});

module.exports = router;