const express = require('express')
const router = express.Router();
router.route('/').get((req, res)=>{
  console.log(req);
  res.send("End");
})

module.exports = router;