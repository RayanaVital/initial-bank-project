import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 9922233309);

const ContaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

const conta2 = new ContaCorrente(cliente2, 102);

ContaCorrenteRicardo.depositar(300);
ContaCorrenteRicardo.transferir(200, conta2);
console.log(conta2);

