//Neste exercico vamos apresentar um menu interativo via console, recebe uma opção e executa a ação correspondente com estrutura switch-case


const prompt = require('readline-sync');

console.log("Menu:");
console.log("1 - Opção 1");
console.log("2 - Opção 2");
console.log("3 - Opção 3");

let escolha = prompt.question("Escolha uma opção (1, 2 ou 3): ");

switch (escolha) {
  case '1':
    console.log("Você escolheu a Opção 1.");
    break;
  case '2':
    console.log("Você escolheu a Opção 2.");
    break;
  case '3':
    console.log("Você escolheu a Opção 3.");
    break;
  default:
    console.log("Opção inválida.");
}