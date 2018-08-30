var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
	var obj;

	fs.readFile('./db/home.json','utf-8',function(err, data){
		if(err) throw err;
		obj.JSON.parse(data);
		console.log(data);
		res.render('users', {
			title: 'Users List',
			data: obj.lists
		});
	});
});
module.exports = router;
