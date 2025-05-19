//Vamos verifica se três valores formam um triângulo e identifica se é equilátero, isósceles ou escaleno com base nas regras geométricas

const prompt = require('readline-sync');

let A = parseFloat(prompt.question("Lado A: "));
let B = parseFloat(prompt.question("Lado B: "));
let C = parseFloat(prompt.question("Lado C: "));

if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    console.log("Triângulo Equilátero");
  } else if (A === B || A === C || B === C) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }
} else {
  console.log("Não forma um triângulo");
}