var mysql = require('mysql');

function connectionFactory(){
	return mysql.createConnection({
  		host: "localhost",
  		user: "yourusername",
  		password: "yourpassword"
	});
};

module.exports = function(){
 return connectionFactory;
};