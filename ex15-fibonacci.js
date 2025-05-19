//Gera e imprime os 10 primeiros termos da sequência de Fibonacci utilizando um loop e atualização de duas variáveis consecutivas

let n1 = 0, n2 = 1;

console.log("Sequencia de Fibonacci (10 números):");
console.log(n1);
console.log(n2);

for (let i = 3; i <= 10; i++) {
  let proximo = n1 + n2;
  console.log(proximo);
  n1 = n2;
  n2 = proximo;
}