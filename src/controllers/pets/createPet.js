const Pet = require("../../models/pet")


async function createPet(request, response) {

    // organizar os dados a serem cadastrados
    
    try {
        const data = {
            nome: request.body.nome,
            data_de_adocao: request.body.data_de_adocao,
            lista_de_alergias: request.body.lista_de_alergias,
            raca: request.body.raca,
            idade: request.body.idade
        }
    
        const petExiste = await Pet.findOne({ 
            where: { nome: request.body.nome } 
        })
    
        if(petExiste) {
            return response.status(409).json({message: 'Pet já cadastrado'})
        }
    
        const pet = await Pet.create(data)
    
        response.status(201).json(pet)

    } catch (error) {
        console.log(error)
        return response.status(500).json({message: 'Não possivel processar a solicitacao'})
    }

}

module.exports = createPet