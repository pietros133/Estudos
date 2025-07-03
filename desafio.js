const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

const SECRET_KEY = "payday";


app.post("/login", (req, res) => {
  const { username } = req.body;

  if (username) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

    res.json({
      mensagem: "Token gerado com sucesso!",
      token: token
    });
  } else {
    res.status(400).json({ error: "Usuário inválido" });
  }
});

app.listen(8081, () => console.log("Servidor rodando na porta 8081"));
