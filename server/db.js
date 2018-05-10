var mongodb = require("mongoose");

mongodb.connect(process.env.MONGODB_URI);

module.exports = mongodb;
