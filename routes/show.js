var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
 

router.post('/', function(req, res, next) {
	const keyword = req.body.keyword;

	console.log(keyword);

	// Password matching
	//if (keyword == process.env.PASSWORD_KEYWORD_MATCH) {
	if (keyword == 'test') {
		var filename = __dirname + '/../public/password.csv';

		const fs = require('fs');
		const parser = require('csv').parse();

		data = []

		fs.createReadStream(filename).pipe(parser);
		
		parser.on('readable', () => {
			var row;
			while (row = parser.read()) {
				data.push(row);
			}
		});

		parser.on('end', () => {
			console.log(data);
			res.render('show', data);
		});

	} else {
		res.render('show', null);
	}

});

module.exports = router;
