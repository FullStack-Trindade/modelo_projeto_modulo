const Pet = require("../../models/pet")

async function updateStatusPet(request, response) {
    try {
        const id = request.params.id // pegando o id enviado
        const petInDatabase = await Pet.findByPk(id)

        if (!["SAUDAVEL", "EM_RECUPERACAO", "ENFERMO"].includes(request.body.status)) {
            return response.status(400).json({ message: 'O status deve ser SAUDAVEL, EM_RECUPERACAO, ENFERMO' })
        }

        if(!petInDatabase) {
            return response.status(404).json({message: 'Pet não encontrado'})
        }

        petInDatabase.status = request.body.status

        await petInDatabase.save()

        return response.json(petInDatabase)
        
    } catch (error) {
        return response.status(500).json({ message: 'Não possivel processar a solicitacao' })
    }
}


module.exports = updateStatusPet