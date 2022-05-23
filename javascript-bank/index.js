import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22233309;

const ContaCorrenteRicardo = new ContaCorrente;
ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.cliente = cliente1;
ContaCorrenteRicardo.depositar(300);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

ContaCorrenteRicardo.transferir(200, conta2);
console.log(conta2);

