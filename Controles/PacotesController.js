PacotesController.js

import Pacotes from "../modelos/Pacotes.js";

export default class PacotesController {
  constructor() {}

  
  async consultarPacotes(req, res) {
    try {
      const pacote = new Pacotes();
      const listaPacotes = await pacote.Consulta();
      
      res.status(200).json(listaPacotes);
    } catch (error) {
      res.status(500).json({ 
        status: false, 
        mensagem: "Erro ao consultar pacotes", 
        erro: error.message 
      });
    }
  }


  async cadastrarPacote(req, res) {
    try {
      const { nome, cidade, dataPartida, valor } = req.body;
      
      if (!nome || !cidade || !dataPartida || !valor) {
        return res.status(400).json({
          status: false,
          mensagem: "Os campos nome, cidade, dataPartida e valor são obrigatórios"
        });
      }

      const pacote = new Pacotes(nome, cidade, dataPartida, parseInt(valor));
      await pacote.grava();
      
      res.status(201).json({
        status: true,
        mensagem: "Pacote cadastrado com sucesso",
        pacote: pacote.toJSON()
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        mensagem: "Erro ao cadastrar pacote",
        erro: error.message
      });
    }
  }

 
  async atualizarPacote(req, res) {
    try {
      const { nome } = req.params;
      const { cidade, dataPartida, valor } = req.body;
      
      if (!cidade || !dataPartida || !valor) {
        return res.status(400).json({
          status: false,
          mensagem: "Os campos cidade, dataPartida e valor são obrigatórios"
        });
      }

      const pacote = new Pacotes(nome, cidade, dataPartida, parseInt(valor));
      await pacote.atualiza();
      
      res.status(200).json({
        status: true,
        mensagem: "Pacote atualizado com sucesso",
        pacote: pacote.toJSON()
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        mensagem: "Erro ao atualizar pacote",
        erro: error.message
      });
    }
  }

  async excluirPacote(req, res) {
    try {
      const { nome } = req.params;
      
      const pacote = new Pacotes(nome);
      await pacote.exclui();
      
      res.status(200).json({
        status: true,
        mensagem: "Pacote excluído com sucesso"
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        mensagem: "Erro ao excluir pacote",
        erro: error.message
      });
    }
  }
}