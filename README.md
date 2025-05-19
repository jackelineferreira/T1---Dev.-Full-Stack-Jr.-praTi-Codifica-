Lista de Exercícios 1 - Estruturas Básicas em JavaScript (Node.js)

Este repositório contém a resolução dos exercícios propostos na Lista de Exercícios 1, utilizando a linguagem JavaScript com execução via Node.js. Os exercícios envolvem estruturas básicas, condicionais e de repetição.

📦 Pré-requisitos

Node.js instalado na máquina (versão recomendada: 18.x ou superior)

Git instalado

Editor de código como Visual Studio Code

🛠️ Configuração do Ambiente

Clone o repositório:

git clone https://github.com/SEU_USUARIO/exercicios-logica-js.git
cd exercicios-logica-js

Abra no VS Code:

code .

Verifique a instalação do Node.js:

node -v

Se exibir a versão do Node, está tudo pronto.

🚀 Executando os exercícios

Cada exercício está comentado individualmente no arquivo exercicios.js. Para executá-los:

Abra o terminal Git Bash no VS Code

Execute o script com o comando:

node exercicios.js

Se desejar executar um único exercício, você pode copiá-lo para um novo arquivo (ex: exercicio1.js) e rodar:

node exercicio1.js

Para exercícios que requerem entrada do usuário, é recomendado utilizar a biblioteca readline-sync:

npm install readline-sync

E no seu arquivo de exercício:

const readline = require('readline-sync');
let numero = readline.question('Digite um número: ');

📄 Lista de Exercícios

Verifica se o número é par ou ímpar

Classifica idade em categorias

Classifica nota

Menu com switch-case

Cálculo de IMC

Verificação de tipo de triângulo

Cálculo de valor total da compra de maçãs

Ordenação crescente de dois números

Contagem regressiva

Impressão repetida de número

Soma de 5 números

Tabuada de um número

Média de números decimais até zero

Cálculo de fatorial

Sequência de Fibonacci

📌 Em caso de dúvidas, entre em contato ou consulte a documentação oficial do Node.js e Git.

🚀 Bons estudos!