import PacotesDB from "../DataBase/PacotesDB.js";
export default class Pacotes {
  #nome;
  #cidade;
  #dataPartida;
  #valor;

  constructor(nome, cidade, dataPartida, valor) {
    this.#nome = nome;
    this.#cidade = cidade;
    this.#dataPartida = dataPartida;
    this.#valor = valor;
  }

  get nome() {
    return this.#nome;
  }
  set nome(novoNome) {
    this.#nome = novoNome;
  }

  get cidade() {
    return this.#cidade;
  }
  set cidade(novaCidade) {
    this.#cidade = novaCidade;
  }

  get dataPartida() {
    return this.#dataPartida;
  }
  set dataPartida(novadataPartida) {
    this.#dataPartida = novaDataPartida;
  }

  get valor() {
    return this.#valor;
  }
  set valor(novoValor) {
    this.#valor = novoValor;
  }

  toJSON() {
    return {
      "nome": this.#nome,
      "cidade": this.#cidade,
      "dataPartida": this.#dataPartida,
      "valor": this.#valor,
    };
  }
  async grava() {
    const pDB = new PacotesDB();
    await pDB.grava(this);
  }

  async atualiza() {
    const pDB = new PacotesDB();
    await pDB.atualiza(this);
  }

  async exclui(pacotes) {
    const pDB = new PacotesDB();
    pDB.exclui(this);
  }

  async Consulta() {
    const pDB = new PacotesDB();
    return await pDB.Consulta(); 
  }
}  
