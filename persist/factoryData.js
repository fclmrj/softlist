var oracledb = require('oracledb');
var dbConfig = require('./dbConfig.js');

function connectionFactory(){
	return oracledb.getConnection({
								    user          : dbConfig.user,
								    password      : dbConfig.password,
								    connectString : dbConfig.connectString
								  },
								  
								  function(err, connection) {
								    if (err) {
								      console.error(err.message);
								      return;
								    }
								    console.log('Connection was successful!');

								    connection.close(
								      function(err) {
								        if (err) {
								          console.error(err.message);
								          return;
								        }
								      });
								  });
};

module.exports = function(){
 return connectionFactory();
};