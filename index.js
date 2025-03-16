import Pacotes from "./modelos/Pacotes.js";

var novopacote = new Pacotes("Toronto", "Canada", "28-10-2025", 2380);

novopacote.grava().then(() => {
  console.log("Pacote gravado com sucesso");
}).catch((error) => {
    console.log("Erro ao gravar pacote" + error);
});

 /*novopacote.atualiza().then(() => {
     console.log("Cliente alterado com sucesso!");
 }).catch((erro) => {
     console.log("Erro ao alterar o cliente: " + erro);
 });*/

 /*novopacote.exclui().then(() => {
   console.log("Cliente excluido com sucesso!");
 }).catch((erro) => {
   console.log("Erro ao excluir o cliente: " + erro);});*/

/*novopacote.Consulta().then((listaPacotes) => {
for (const cliente of listaPacotes) {
 console.log(cliente.toJSON());
}
});*/