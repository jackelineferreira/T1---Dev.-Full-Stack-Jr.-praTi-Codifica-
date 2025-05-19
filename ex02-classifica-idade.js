// Exercico para classificar a idade de uma pessoa

const prompt = require('readline-sync');

// Usamos LET para definir a variável 
let idade = parseInt(prompt.question("Digite a idade da pessoa: "));

//E a estrutura IF-ELSE para verificar em qual faixa etaria se encontra o individuo
if (idade >= 0 && idade <= 12) {
  console.log("Criança");
} else if (idade >= 13 && idade <= 17) {
  console.log("Adolescente");
} else if (idade >= 18 && idade <= 59) {
  console.log("Adulto");
} else if (idade >= 60) {
  console.log("Idoso");
} else {
  console.log("Idade inválida");
}