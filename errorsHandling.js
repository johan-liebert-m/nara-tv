const fs = require('fs');

exports.onError404 = function(req, res, next) {
	res.status(404);
	fs.createReadStream('./public/Error404.html').pipe(res);
}

exports.onError500 = function(req, res, next) {
	res.status(500);
	fs.createReadStream('./public/Error500.html').pipe(res);
}
