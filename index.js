const express = require('express')
const conexao = require('./src/database')
const Pet = require('./src/models/pet')

const createPet = require('./src/controllers/pets/createPet')
const findAllPet = require('./src/controllers/pets/findAllPet')
const findOnePet = require('./src/controllers/pets/findOnePet')
const deletePet = require('./src/controllers/pets/deletePet')
const updateStatusPet = require('./src/controllers/pets/updateStatusPet')

const app = express()
app.use(express.json()) // obrigatório

app.post('/api/pets', createPet )
app.get('/api/pets', findAllPet )
app.get('/api/pets/:id', findOnePet)
app.delete('/api/pets/:id', deletePet)
app.put('/api/pets/:id/status', updateStatusPet)

conexao.sync({alter: true})

app.listen(6666, () => {
    console.log("Projeto online")
})