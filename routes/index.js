const express = require('express')
const router = express.Router();
const weather = require("./middlewares/weather"); 
const places = require("./middlewares/places"); 
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.use('/get-weather', weather);
router.use('/places', places);

module.exports = router