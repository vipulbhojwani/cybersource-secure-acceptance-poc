var express = require('express');
var router = express.Router();
var request = require('request');

cyberSourceUrl = "https://testsecureacceptance.cybersource.com/pay";


/* GET users listing. */
router.post('/', function(req, res, next) {
  
  console.log("haha");
  console.log(req.body);
  request.post({url: cyberSourceUrl, form: req.body}, function(err,httpResponse,body){
    console.log(httpResponse)

    res.status(301).redirect(httpResponse.location);



    // res.redirect(httpResponse);
  })





});

module.exports = router;
