const express = require('express')
const conexao = require('./src/database')
const Pet = require('./src/models/pet')

const app = express()
app.use(express.json()) // obrigatório

conexao.sync({alter: true})

app.listen(6666, () => {
    console.log("Projeto online")
})