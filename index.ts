import Cliente from "../Cliente";
import Endereco from "../Endereco";
import Produto from "../Produto";
import Telefone from "../Telefone";
import Venda from "../Venda";

let telefone1 = new Telefone ("42", 988464625, "Celular");
let telefone2 = new Telefone ("42", 123456789, "Residencial");

let endereco = new Endereco("Rua Cruzeiro", 123, "Guarapuava", "Parana");

let cliente = new Cliente("Willian", 1234567890, 14122000, "Masculino", endereco, [telefone1, telefone2]);

let produto1 = new Produto(1, "Camisa Barcelona 1", 300);
let produto2 = new Produto(2, "Camisa Barcelona 2", 250);

let venda = new Venda(1, 12122013, cliente, [produto1, produto2]);

console.log("Valor Total: " + venda.calcularTotal())