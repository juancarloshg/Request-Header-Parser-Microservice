var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.json({
		ip: req.ip,
		language: req.headers["accept-language"],
		browser: req.headers['user-agent']
	});
});

app.listen(3000, function () {
 	console.log('app listening on port 3000!');
});
