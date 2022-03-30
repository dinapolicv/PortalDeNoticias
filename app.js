const app = require('./config/server.js')
const rotahome = require('/app/routes/home')(app); //esta importando o modulo home
const rotaadmin = require('/app/routes/admin')(app); //esta importando o modulo admin
const rotanoticias = require('/app/routes/noticias')(app); //esta importando o modulo noticias
//Cria um servidor rodando na porta 3000
app.listen('3000', function() {
    console.log('Servidor rodando na porta 3000');
});