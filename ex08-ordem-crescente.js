//Lê dois números diferentes e exibe em ordem crescente com um simples if para comparar os valores

const prompt = require('readline-sync');

let num1 = parseFloat(prompt.question("Digite o primeiro numero: "));
let num2 = parseFloat(prompt.question("Digite o segundo numero (diferente do primeiro): "));

if (num1 < num2) {
  console.log(`${num1}, ${num2}`);
} else {
  console.log(`${num2}, ${num1}`);
}