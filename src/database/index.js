const Sequelize = require('sequelize')

const conexao = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    port: 5432,
    database: 'labmedicinebd',
    define: {
        timestamps: true,  
        underscored: true,
        underscoredAll: true,
      }
})

module.exports = conexao