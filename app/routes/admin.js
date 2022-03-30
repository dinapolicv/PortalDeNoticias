//funçao que esta exportando o modulo 
module.exports = function(app) {
    //rota para a página de formulario para criaçao de notícias
    app.get('/formulario', (req, res) => {
        res.render('./admin/form_add_noticia.ejs');
    });
}