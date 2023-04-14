const Pet = require("../../models/pet")

async function findOnePet(request, response) {
    try {
        const id = request.params.id // pegando o id enviado
        const petInDatabase = await Pet.findByPk(id)

        if(!petInDatabase) {
            return response.status(404).json({message: 'Pet não encontrado'})
        }

        return response.json(petInDatabase)
    } catch (error) {
        return response.status(500).json({ message: 'Não possivel processar a solicitacao' })
    }
}


module.exports = findOnePet