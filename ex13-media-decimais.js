//Lê números decimais em loop até que o usuário digite 0 e calcula a média aritmética dos valores lidos

const prompt = require('readline-sync');

let soma = 0;
let count = 0;
let numero;

do {
  numero = parseFloat(prompt.question("Digite um numero decimal (0 para sair): "));
  if (numero !== 0) {
    soma += numero;
    count++;
  }
} while (numero !== 0);

if (count > 0) {
  let media = soma / count;
  console.log(`A media dos numeros digitados é: ${media.toFixed(2)}`);
} else {
  console.log("Nenhum numero válido foi digitado.");
}