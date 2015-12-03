var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contato = mongoose.model('Contato');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET load all contatos */
router.get('/contatos', function(req, res, next) {
	Contato.find(function(err, contatos){
		if(err){ return next(err); }

		res.json(contatos);
	});
});

/* GET add contato */
router.post('/add', function(req, res, next) {
	console.log(req.body);
	var contato = new Contato(req.body);

	contato.save(function(err, contato) {
		if(err){ return next(err); }

		res.json(contato);
	});
});

router.delete('/delete', function(req, res, next) {
	console.log(req.body);
	var contato = new Contato(req.body);

	contato.remove(function(err, contato) {
		if(err){ return next(err); }

		res.json(contato);
	});
});

module.exports = router;
