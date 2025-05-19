//Lê um número e o imprime 10 vezes no console usando um laço for com contador de repetições

const prompt = require('readline-sync');

let numero = parseInt(prompt.question("Digite um numero inteiro: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${i}: ${numero}`);
}
