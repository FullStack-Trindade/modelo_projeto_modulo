const Pet = require("../../models/pet")

async function deletePet(request, response) {
    try {
        const id = request.params.id // pegando o id enviado
        const petInDatabase = await Pet.findByPk(id)

        if(!petInDatabase) {
            return response.status(404).json({message: 'Pet não encontrado'})
        }

        await petInDatabase.destroy()

        return response.status(204).json()
    } catch (error) {
        return response.status(500).json({ message: 'Não possivel processar a solicitacao' })
    }
}


module.exports = deletePet