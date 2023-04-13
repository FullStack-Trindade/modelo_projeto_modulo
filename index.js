const express = require('express')
const conexao = require('./src/database')
const Pet = require('./src/models/pet')

const createPet = require('./src/controllers/pets/createPet')
const findAllPet = require('./src/controllers/pets/findAllPet')

const app = express()
app.use(express.json()) // obrigatório

app.post('/api/pets', createPet )
app.get('/api/pets', findAllPet )


conexao.sync({alter: true})

app.listen(6666, () => {
    console.log("Projeto online")
})