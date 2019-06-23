const mongoose = require("mongoose");
const config = require("../config");

module.exports = dbConnection;

function connect() {
	return mongoose.connect(
		config.dbConnectionString,
		{
			useNewUrlParser: true, // use new MongoDB driver interface (see details here: https://mongoosejs.com/docs/connections.html)
			reconnectTries: Number.MAX_VALUE, // never stop trying to reconnect
  			reconnectInterval: 1000, // reconnect every second
		}
	);
}

function dbConnection() {
	const db = mongoose.connection;
	db.once("open", () => console.log("Connected to the database"));
	db.on("error", (error) => {
		console.log("MongoDB connection error: ", error);
		if ( error.code === 'ECONNREFUSED') {
			setTimeout(() => {
				console.log("Reconnecting...");
				connect();
			}, 5000); // try reconnecting in 5 seconds
		}
	});

	connect();
}


