const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Rota POST com a senha como parâmetro de rota
app.post('/senha', (req, res) => {
  const {password} = req.body;

  if (!password) {
    return res.status(400).json({ errors: ['Senha não fornecida.'] });
    
  }

  const errors = [];

  if (password.length < 8) {
    errors.push('A senha deve ter pelo menos 8 caracteres.');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('A senha deve conter pelo menos uma letra maiúscula.');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('A senha deve conter pelo menos uma letra minúscula.');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('A senha deve conter pelo menos um número.');
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('A senha deve conter pelo menos um caractere especial.');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  return res.status(200).send('Senha válida');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
