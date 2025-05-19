//Calcular o valor total da compra de maçãs com preço variável de acordo com a quantidade, usando if para a lógica do preço

const prompt = require('readline-sync');

let quantidade = parseInt(prompt.question("Quantidade de macas compradas: "));

let preco;

if (quantidade < 12) {
  preco = 0.30;
} else {
  preco = 0.25;
}

let total = quantidade * preco;
console.log(`Total da compra: R$ ${total.toFixed(2)}`);