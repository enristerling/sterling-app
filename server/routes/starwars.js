var express = require("express");
var swapi = require('swapi-node');

var router = express.Router();

router.get("/people/:id", function (req, res) {
	var id = req.params.id;

    swapi.getPerson(id) 
        .then(function(response) {
        console.log(response);
        res.json(response);
    })
    .catch(function(error) {
    	 console.log('There was an ERROR: ', error);
    	 res.send("Not found");
    });
});

router.get("/planets/:id", function (req, res) {
	var id = req.params.id;

	var url = 'http://swapi.co/api/planets/' + id;
 
    swapi.get(url) 
        .then(function(response) {
        console.log(response);
        res.json(response);
    })
    .catch(function(error) {
    	 console.log('There was an ERROR: ', error);
    	 res.send("Not found");
    });
});

router.get("/starships/:id", function (req, res) {
	var id = req.params.id;

    swapi.getStarship(id) 
        .then(function(response) {
        console.log(response);
        res.json(response);
    })
    .catch(function(error) {
    	 console.log('There was an ERROR: ', error);
    	 res.send("Not found");
    });
});

router.get("/species/:id", function (req, res) {
	var id = req.params.id;

    swapi.getSpecies(id) 
        .then(function(response) {
        console.log(response);
        res.json(response);
    })
    .catch(function(error) {
    	 console.log('There was an ERROR: ', error);
    	 res.send("Not found");
    });
});

router.get("/vehicle/:id", function (req, res) {
	var id = req.params.id;

    swapi.getVehicle(id) 
        .then(function(response) {
        console.log(response);
        res.json(response);
    })
    .catch(function(error) {
    	 console.log('There was an ERROR: ', error);
    	 res.send("Not found");
    });
});

router.get("/films/:id", function (req, res) {
	var id = req.params.id;

    swapi.getFilm(id) 
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
