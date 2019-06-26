const jwtSecret = process.env.JWT_SECRET || "Just a random unique string to be used with JWT";
const dbHost = process.env.DB_HOST || "localhost";
const dbPort = process.env.DB_PORT || 27017;
const dbUser = process.env.DB_USER || "user-service";
const dbPass = process.env.DB_PASS || "example";
const dbName = process.env.DB_NAME || "app";
const dbConnectionString = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
const apiPort = process.env.API_PORT || 80;

module.exports = {
	jwtSecret, 
	dbConnectionString,
	apiPort
}