const Pet = require('../../models/pet')

async function findAllPet(request, response) {

    // request.body -> pegar o json do body
    // request.params -> pegar o json dos params
    // request.query ->  pegar os parametros da URL


    try {
        const filtros = request.query
        
        if(filtros.raca) {

            if (!['CARAMELO', 'DOBERMAN', 'GUAPECA'].includes(filtros.raca)) {
                return response.json({ message: 'A raçã deve ser CARAMELO, DOBERMAN ou Guapeca' })
            }
        
            const pets = await Pet.findAll(
                {
                    where: {
                        raca: filtros.raca
                    }
                }
            ) // busca todos os pets do banco de dados
            response.json(pets) // retorna todos os pets buscados
        } else {
            const pets = await Pet.findAll() // busca todos os pets do banco de dados
            response.json(pets) // retorna todos os pets buscados
        }
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: 'Não possivel processar a solicitacao' })
    }
}

module.exports = findAllPet