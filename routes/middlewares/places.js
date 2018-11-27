const express = require('express')
const router = express.Router();
const {instance} = require('../../services/axios');
const {endpoints} = require('../../services/endpoints');
const {checkEmpty} = require('../../utils/validations'); 
const {printSuccessResponse} = require('../../utils/response'); 
router.route('/autocomplete/:place?')
.all(function(req, res, next) {
  req.mandatoryFields = ['place'];
  req.data = req.params
  next();
}).get(checkEmpty, (req, res)=>{
    instance.get(endpoints.googleAutoSuggest('noida'))
    .then((result)=>{
      printSuccessResponse(res, result.data)
    }).catch((e)=>{
      console.log(e);
      res.end('Error', e);
    });
});

router.route('/geocode/:place?')
.all(function(req, res, next) {
  req.mandatoryFields = ['place'];
  req.data = req.params
  next();
}).get(checkEmpty, (req, res)=>{
  console.log(req.data);
  console.log(endpoints.googleGeocode('noida'));
  res.end();
    // instance.get(endpoints.googleGeocode('noida'))
    // .then((result)=>{
    //   console.log(result);
    //   // printSuccessResponse(res, result.data)
    //  // res.end();
    // }).catch((e)=>{
    //   console.log(e);
    //   res.end('Error', e);
    // });
});
module.exports = router;