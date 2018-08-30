var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	var obj;

	fs.readFile('./db/shop.json','utf-8',function(err, data){
		if(err) throw err;
		obj=JSON.parse(data);
		res.render('shop', { dataShop: obj });
	});
});

module.exports = router;
