const Sequelize = require('sequelize')
const conexao = require('../database')

const Pet = conexao.define('pet', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },
     nome: {
        type: Sequelize.STRING,
        allowNull: false
     },
     data_de_adocao: {
        type: Sequelize.DATEONLY
     },
     lista_de_alergias: {
        type: Sequelize.STRING
     },
     raca: {
        type: Sequelize.ENUM("CARAMELO", "DOBERMAN", "GUAPECA")
     },
     idade: {
        type: Sequelize.INTEGER,
        defaultValue: 1
     },
     status: {
      type: Sequelize.ENUM("SAUDAVEL", "EM_RECUPERACAO", "ENFERMO"),
      defaultValue: 'SAUDAVEL'
     }
})

module.exports = Pet