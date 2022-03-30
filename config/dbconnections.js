const mysql = require('mysql'); //importaçao do mysql
//funçao que esta exportando o modulo 
module.exports = function() {
    return mysql.createconnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
}