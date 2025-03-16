import express from "express";
import rotasPacotes from "./routes/PacotesRoutes.js";

const app = express();
const porta = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Utilizando as rotas de pacotes
app.use("/api", rotasPacotes);

app.get("/", (req, res) => {
  res.json({
    mensagem: "API de Gerenciamento de Pacotes de Viagem",
    status: "online",
    versao: "1.0.0",
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: false,
    mensagem: "Rota não encontrada",
  });
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});

export default app;
