//Vamos verificar se um número é par ou ímpar
const prompt = require('readline-sync');

//O programa solicita um número ao usuário
const numero = parseInt(prompt.question("Digite um número inteiro: "));


//Vamos usar a estrutura if para decisão
if (numero % 2 === 0) {
  console.log(`O número ${numero} é par.`);
} else {
  console.log(`O número ${numero} é ímpar.`);
}