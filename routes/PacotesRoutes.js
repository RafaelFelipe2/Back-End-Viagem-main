PacotesRoutes.js

import { Router } from "express";
import PacotesController from "../controllers/PacotesController.js";

const rotasPacotes = Router();
const pacotesCtrl = new PacotesController();


rotasPacotes.get("/pacotes", (req, res) => {
  pacotesCtrl.consultarPacotes(req, res);
});


rotasPacotes.post("/pacotes", (req, res) => {
  pacotesCtrl.cadastrarPacote(req, res);
});

rotasPacotes.put("/pacotes/:nome", (req, res) => {
  pacotesCtrl.atualizarPacote(req, res);
});


rotasPacotes.delete("/pacotes/:nome", (req, res) => {
  pacotesCtrl.excluirPacote(req, res);
});

export default rotasPacotes;