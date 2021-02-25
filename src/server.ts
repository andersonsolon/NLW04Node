import express from 'express';

const app = express();

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 */

 //http://localhost:3333/users
 app.get("/", (req, res) => {
     return res.json({Message:"Hello World - NLW04"})
 })

 //Método POST
 // 1 parametro => Rota (recurso API)
 // 2 parametro => request "res", response "res"

 app.post("/", (req, res) => {
     //recebeu os dados para salvar para
     return res.json({Message:"Os dados foram salvos com sucesso"})
 })

app.listen(3333, () => console.log("server is running!"))
