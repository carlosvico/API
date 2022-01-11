
exports.pegandoPosts = (req, res, next) => {
    // PEGANDO UM POST

    res.status(200).json({
        posts: [{title: 'Primeiro Post', content: 'Este é o primeiro post!'},
                {title: 'Segundo Post', content: 'Este é o segundo post!'}]
    });


}

exports.criandoPost = (req, res, next) => {
    const titulo = req.body.title;
    const conteudo = req.body.content;
    // Criando posts in db
    res.status(201).json({
        message: 'Post criado com sucesso!', 
        post: {id: new Date().toISOString(), title:titulo, content: conteudo}
         
    });
}