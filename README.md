# CRUD de Filmes com Node.js

Projeto acadêmico construído com Node.js, Express e Mongoose para gestão de um catálogo de filmes.

## Estrutura do Projeto

```text
src/
├── controllers/
│   └── filmeController.js
├── models/
│   └── Filme.js
├── routes/
│   └── filmeRoutes.js
└── server.js
```

## Deploy na Nuvem
A API está hospedada no Render e responde no endereço: 
**https://api-filmes-back.onrender.com/filmes**

## Executar Localmente

```bash
npm install
cp .env.example .env
npm run dev
```

**Nota:** É necessário configurar a variável `MONGODB_URI` no arquivo `.env` com a string de conexão do MongoDB Atlas.

## Rotas da API

| Método | Rota | Ação |
|---|---|---|
| GET | /filmes | Lista todos os filmes cadastrados |
| GET | /filmes/:id | Busca um filme (suporta pesquisa por ID ou por parte do Título) |
| POST | /filmes | Cadastra um novo filme |
| PUT | /filmes/:id | Atualiza os dados de um filme existente |
| DELETE | /filmes/:id | Exclui um filme do banco de dados |

## Exemplo de JSON (Payload)

```json
{
  "titulo": "O Auto da Compadecida",
  "diretor": "Guel Arraes",
  "dataLancamento": "2000-09-15",
  "genero": "Comédia"
}
```