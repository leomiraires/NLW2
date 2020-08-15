//Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configurar nunkucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor
server
//receber os dados do req body
.use(express.urlencoded({ extended: true}))
.use(express.static("public")) // configirar arquivos staticos (css, scripts, imagens)
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do servidor
.listen(5500)