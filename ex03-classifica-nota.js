//Vamos classificar uma nota entre 0 e 10 como Aprovado, Recuperação ou Reprovado utilizando if, else if e validação de intervalo

const prompt = require('readline-sync');

let nota = parseFloat(prompt.question("Digite a nota (0 a 10): "));

if (nota >= 7 && nota <= 10) {
  console.log("Aprovado");
} else if (nota >= 4 && nota < 7) {
  console.log("Recuperação");
} else if (nota >= 0 && nota < 4) {
  console.log("Reprovado");
} else {
  console.log("Nota inválida");
}