var express = require('express');
var router = express.Router();
var crypto = require('crypto');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


var SECRET_KEY = "371ad0c595ad44a392c9040d0559277153657b33820b45ea97ec500b8363c4917667a7c4f8a249c5854a637c8faff758c6ccf2f35288467a982126da28af48e911dcdce3ae034fb0b4bc1e86f66a9cf62f4cdf7eb30a436296a7edfd67690a516d31805e5ca84c93b244f1fe283a954b90755ef6544d4f23a241d6fe478a13e7";

router.get('/:data', function(req, res, next) {
  
  // let dataToEncode=req.data;

  console.log(req.params.data);
  
  res.send({signature: generateDigest(req.params.data)});
  
  //res.send(req.params.data);

  //res.render('index', { title: 'Express' });
});


function generateDigest(payload) {

	var buffer = Buffer.from(payload, 'utf8');
	
	const hash = crypto.createHmac('sha256', SECRET_KEY);
	
	hash.update(buffer);
	
	var digest = hash.digest('base64');
	
	return digest;
}

module.exports = router;
