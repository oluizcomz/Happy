const express = require('express')
const server = express()//variavel do servidor
const path = require ('path');//variavel que contem os caminhos dads pastas

const pages = require('./pages.js');

//criar uma rota (index)

server
.use(express.urlencoded({ extended : true}))

.use(express.static('public'))//deixando a pasta public statica (vulgo comeso da url)
//configurar template engine
.set('views',path.join(__dirname, 'views'))//colucando na url para entrar depois da public na views
.set('view engine', 'hbs')

//rotas da aplicaçao
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage',pages.saveOrphanage)

//ligar servidor
server.listen(5502)
