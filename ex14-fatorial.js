//Lê um número inteiro e calcula seu fatorial com loop for ou while, multiplicando os inteiros sucessivos

const prompt = require('readline-sync');

let numero = parseInt(prompt.question("Digite um numero inteiro para calcular o fatorial: "));

if (numero < 0) {
  console.log("Fatorial não definido para numeros negativos.");
} else {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log(`Fatorial de ${numero} é ${fatorial}`);
}