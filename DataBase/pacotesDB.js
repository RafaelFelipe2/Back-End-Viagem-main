import Pacotes from "../modelos/Pacotes.js";
import conectar from "./conexao.js";

export default class PacotesDB {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const conexao = await conectar();
      const sql = `CREATE TABLE IF NOT EXISTS pacotes(
            nome VARCHAR(50) NOT NULL PRIMARY KEY,
            cidade VARCHAR(100) NOT NULL,
            dataPartida VARCHAR(100) NOT NULL,
            valor INT NOT NULL
        )`;
      await conexao.execute(sql);
    } catch (error) {
      console.log("Erro ao iniciar banco de dados:", error);
    }
  }

  async grava(pacotes) {
    if (pacotes instanceof Pacotes) {
      const conexao = await conectar();
      const sql = `INSERT INTO pacotes (nome, cidade, dataPartida, valor) VALUES (?, ?, ?, ?)`;
      const parametros = [
        pacotes.nome,
        pacotes.cidade,
        pacotes.dataPartida,
        pacotes.valor,
      ];
      await conexao.execute(sql, parametros);
      await conexao.release();
    }
  }

  async atualiza(pacotes) {
    if (pacotes instanceof Pacotes) {
      const conexao = await conectar();
      const sql = `UPDATE pacotes SET 
        cidade = ?,
        dataPartida = ?,
        valor = ?
      WHERE nome = ?`;
      const parametros = [
        pacotes.cidade,
        pacotes.dataPartida,
        pacotes.valor,
        pacotes.nome,
      ];
      await conexao.execute(sql, parametros);
      await conexao.release();
    }
  }

  async exclui(pacotes) {
    if (pacotes instanceof Pacotes) {
      const conexao = await conectar();
      const sql = `DELETE FROM pacotes WHERE nome = ?`;
      const parametros = [pacotes.nome];
      await conexao.execute(sql, parametros);
    }
  }

  async Consulta() {
    const conexao = await conectar();
    const sql = `SELECT * FROM pacotes ORDER BY nome`;
    const [registros, campos] = await conexao.execute(sql);
    await conexao.release();
    let listaPacotes = [];
    for (const registro of registros) {
      const pacote = new Pacotes(
        registro.nome,
        registro.cidade,
        registro.dataPartida,
        registro.valor
      );
      listaPacotes.push(pacote);
    }
    return listaPacotes;
  }
}
