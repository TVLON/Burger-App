var express = require("express");
var router = express.Router();
var burger = require("./../models/burger.js");

router.get('/', function(req, res){
	burger.all(function(returnBurgers){
		console.log(returnBurgers)
		res.render('index', {
			allBurgers: returnBurgers
		});
	})
})
router.post('/api/burgers', function(req, res){
	burger.create(req.body.burgerName, function(result){
		console.log(result)
		res.send({status:200})
	})
})

router.post('/api/devoure', function(req, res){
	burger.update(req.body.id, function(result){
		console.log(result)
		res.send({status:200})
	})
})


module.exports = router