const express = require('express')
const router = express.Router();
const weather = require("./middlewares/weather"); 
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.use('/get-weather', weather);

module.exports = router