var db = require('../../db.js');
var Schema = db.Schema;

// create a schema
var teamSchema = new Schema({
  name: String,
  pokemon: [Number],
  main: Boolean
  //meta: {
  //  age: Number,
  //  website: String
  //},
  //created_at: Date,
  //updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var PokemonTeam = db.model('PokemonTeam', teamSchema);

// make this available to our users in our Node applications
module.exports = PokemonTeam;