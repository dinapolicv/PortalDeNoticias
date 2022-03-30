//funçao que esta exportando o modulo 
module.exports = function(app) {
    //rota para a página de notícia
    app.get('/noticia', function(req, res) {
        const dbconnections = require('././config/dbconnections');
        const connection = dbconnections();
        //cria uma conexao com o banco de dados
        connection.query('SELECT * FROM noticias', function(error, result) {
            if (error) {
                console.log(error);
            }
            res.render('./noticias/noticias.ejs', { noticias: result });
        });
    });
}