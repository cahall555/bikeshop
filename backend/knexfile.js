const path = require("path");

const BASE_PATH = path.join(__dirname, "src", "server", "db");

module.exports = {
	test: {
		client: "pg",
		connection: {
			host: "bikeshop-db-1",
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: "bikeshop_api_test",
		},
		migrations: {
			directory: path.join(BASE_PATH, "migrations"),
		},
		seeds: {
			directory: path.join(BASE_PATH, "seeds"),
		},
	},
	development: {
		client: "pg",
		connection: {
			host: "bikeshop-db-1",
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: "bikeshop_api",
		},
		migrations: {
			directory: path.join(BASE_PATH, "migrations"),
		},
		seeds: {
			directory: path.join(BASE_PATH, "seeds"),
		},
	},
};

