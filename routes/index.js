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

/* POST add contato */
router.post('/add', function(req, res, next) {

	var contato = new Contato(req.body);

	contato.save(function(err, contato) {
		if(err){ return next(err); }

		res.json(contato);
	});
});

/* POST remove contato */
router.post('/delete', function(req, res, next) {

	var contato = new Contato(req.body);

	contato.remove(function(err, contato) {
		if(err){ return next(err); }

		res.json(contato);
	});
});

/* POST update contato */
router.post('/update', function(req, res, next) {
	var afterContato = new Contato(req.body);

	Contato.findByIdAndUpdate(afterContato._id, afterContato, function(err, beforeContato) {
		if(err){ return next(err); }

		res.send(beforeContato);
	});

});

module.exports = router;
