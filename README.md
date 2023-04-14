# Api de gerenciamento médico 

> api resolve varios problemas, dentro deles ....Tech

## Tecnologias utilizadas

Projeto foi desenvolvido utilizando a linguagem javascript com Node.js framework. Segue abaixo as depências externas utizadas

| Plugin | Uso |
| ------ | ------ |
| Sequelize | Gerenciar modelos da aplicação |

## Técnicas e padrões utilizadas

O projeto foi dividido em uma estruturas de pastas para organizar melhor ...

| Plugin | Uso |
| ------ | ------ |
| /src/models | Contém todos modelos da aplicação |


## Como executar o projeto
```sh
Clonar o repositório [link]
npm install 
npm start
```

## Futuras melhorias identificadas

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

## Endpoints - Rotas

**GET /api/pets/:id**
_Retorna um pet específico._

Parâmetros:

id (obrigatório): ID do pet desejado.

Exemplo de resposta:

```sh
{
	"status": "SAUDAVEL",
	"id": 9,
	"nome": "Bolinha",
	"data_de_adocao": "2022-03-11",
	"lista_de_alergias": "chocolate",
	"raca": "GUAPECA",
	"idade": 100,
	"updatedAt": "2023-04-14T22:37:32.934Z",
	"createdAt": "2023-04-14T22:37:32.934Z"
}
```