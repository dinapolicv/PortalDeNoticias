const app = require('./config/server.js')

//rota para a página principal do app
app.get('/', function(req, res) {
    res.render('home/index.ejs');
});

//rota para a página de notícia
app.get('/noticia', function(req, res) {
    const mysql = require('mysql'); //importaçao do mysql
    const connection = mysql.createconnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
    //cria uma conexao com o banco de dados
    connection.query('SELECT * FROM noticias', function(error, result) {
        if (error) {
            console.log(error);
        }
        res.send(result); //resposta da query para o cliente;
    });
});

app.get('/formulario', (req, res) => {
    res.render('adm/form_add_noticia.ejs');
});

//Cria um servidor rodando na porta 3000
app.listen('3000', function() {
    console.log('Servidor rodando na porta 3000');
});