import express from 'express';
import pages from './pages.js';
import { join } from 'path';


const server = express()//variavel do servidor

//criar uma rota (index)
console.log(join(process.cwd(), 'src', 'views'))
server
.use(express.urlencoded({ extended : true}))

.use(express.static('public'))//deixando a pasta public statica (vulgo comeso da url)
//configurar template engine
.set('views',join(process.cwd(), 'src', 'views'))//colucando na url para entrar depois da public na views
.set('view engine', 'hbs')

//rotas da aplicaçao
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage',pages.saveOrphanage)
console.log('teste')
//ligar servidor
server.listen(5502)
