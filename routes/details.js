const express = require('express');

const router = express.Router();

const getDetailsControllers = require('../controllers/getDetails')



router.get("/laptopDescription/:id",getDetailsControllers.getDetails );


module.exports = router;