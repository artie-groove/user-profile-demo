const mongoose = require("mongoose");
const config = require("../config.json");

module.exports = dbConnection;

function dbConnection() {
	mongoose.connect(
		config.dbConnectionString,
		{ useNewUrlParser: true }
	);

	let db = mongoose.connection;

	db.once("open", () => console.log("Connected to the database"));
	db.on("error", console.error.bind(console, "MongoDB connection error:"));

	return db;
}


