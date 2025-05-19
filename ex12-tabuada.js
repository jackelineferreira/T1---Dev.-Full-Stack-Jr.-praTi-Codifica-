//Solicita um número e imprime sua tabuada de 1 a 10 com um laço for e multiplicação

const prompt = require('readline-sync');

let numero = parseInt(prompt.question("Digite um numero para ver a tabuada: "));

console.log(`Tabuada do ${numero}:`);

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}