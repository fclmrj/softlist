var factory = require('factoryData');

var connection = factory().createConnection();

function SoftwareDao(connection){
   this._connection = connection;
};

SoftwareDao.prototype._listar = new SoftwareDao(callback){
   this._connection.query("SELECT * FROM SOFTWARE", callback);
};

SoftwareDao.prototype._inserir = new SoftwareDao(software, callback){
	this._connection.query("INSERT INTO SOFTWARE SET ?", software, callback);
};

SoftwareDao.prototype._alterar = new SoftwareDao(software, callback){
	this._connection.query("UPDATE SOFTWARE SET ?", software, callback);
};

SoftwareDao.prototype._excluir = new SoftwareDao(software, callback){
	this._connection.query("DELETE FROM SOFTWARE SET ?", softare, callback);
};