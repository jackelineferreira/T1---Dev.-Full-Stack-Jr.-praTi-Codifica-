//Usar um laço for para ler 5 números digitados e soma todos, exibindo o resultado final ao fim do loop

const prompt = require('readline-sync');

let soma = 0;

for (let i = 1; i <= 5; i++) {
  let numero = parseFloat(prompt.question(`Digite um numero: `));
  soma += numero;
}

console.log(`A soma dos numeros é: ${soma}`);