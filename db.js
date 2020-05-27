const mysql     = require('mysql'),
	connection	= mysql.createConnection({
		host     : '127.0.0.1',
		user     : '1',
		password : '1',
		database : '1'
});

connection.connect();

module.exports = connection;