// Neste exercico vamos calcular o IMC com base no peso e altura e classifica como baixo peso, normal, sobrepeso ou obesidade com if-else

const prompt = require('readline-sync');

let peso = parseFloat(prompt.question("Digite seu peso em kg: "));
let altura = parseFloat(prompt.question("Digite sua altura em metros: "));

let imc = peso / (altura * altura);

console.log(`Seu IMC é ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log("Baixo peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}