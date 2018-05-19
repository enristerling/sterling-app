var express = require("express");
var bodyParser = require("body-parser");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

var PORT = process.env.PORT || 3000;

var app = express();

//app.use(express.static("public"));
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//auth routes
var authRoutes = require("./server/auth/auth.js");
app.use('/auth', authRoutes);

//routes
var pokemonRoutes = require("./server/routes/pokemon.js");
var starwarsRoutes = require("./server/routes/starwars.js");

app.use('/pokemon', pokemonRoutes);
app.use('/starwars', starwarsRoutes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});