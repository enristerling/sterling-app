var express = require("express");
var verifyToken = require('../auth/verifytoken.js');
var Pokedex = require('pokedex-promise-v2');
var PokemonTeam = require('../models/pokemon/PokemonTeam.js');

var router = express.Router();
var P = new Pokedex();

router.get("/teams", function (req, res) {
	PokemonTeam.find({}, function(err, teams) {
		if (err) throw err;

	  	// object of all the users
	  	console.log(teams);
	  	res.json(teams);
	});
});

router.put("/team", verifyToken, function (req, res) {
    var name = req.body.name;
    var main = req.body.main;

	var newTeam = new PokemonTeam({
	 	name: name,
	 	pokemon: [],
	 	main: main
	});

	// save the team
	newTeam.save(function(err) {
	  if (err) throw err;

	  console.log('Pokemon Team created!');
	  res.send("Pokemon Created");
	});
});


router.get("/:id", function (req, res) {
	var id = req.params.id;

    P.getPokemonByName(id) 
        .then(function(response) {
        console.log(response);
        res.json(response);
    })
    .catch(function(error) {
    	 console.log('There was an ERROR: ', error);
    	 res.send("Not found");
    });
});

router.get("/ability/:id", function (req, res) {
	var id = req.params.id;

    P.getAbilityByName(id) 
        .then(function(response) {
        console.log(response);
        res.json(response);
    })
    .catch(function(error) {
    	 console.log('There was an ERROR: ', error);
    	 res.send("Not found");
    });
});

router.get("/characteristic/:id", function (req, res) {
	var id = req.params.id;

    P.getCharacteristicByName(id) 
        .then(function(response) {
        console.log(response);
        res.json(response);
    })
    .catch(function(error) {
    	 console.log('There was an ERROR: ', error);
    	 res.send("Not found");
    });
});

router.get("/move/:id", function (req, res) {
	var id = req.params.id;

    P.getMoveByName(id) 
        .then(function(response) {
        console.log(response);
        res.json(response);
    })
    .catch(function(error) {
    	 console.log('There was an ERROR: ', error);
    	 res.send("Not found");
    });
});

module.exports = router;
