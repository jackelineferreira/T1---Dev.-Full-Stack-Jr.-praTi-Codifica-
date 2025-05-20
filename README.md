# Lista de Exercícios 1 - Estruturas Básicas em JavaScript (Node.js)

Este repositório contém a resolução dos exercícios propostos na Lista de Exercícios 1, utilizando a linguagem JavaScript com execução via Node.js. Os exercícios envolvem estruturas básicas, condicionais e de repetição.

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina (versão recomendada: 18.x ou superior)  
- [Git](https://git-scm.com/) instalado  
- Editor de código como [Visual Studio Code](https://code.visualstudio.com/)

## 🛠️ Configuração do Ambiente

1. **Clone o repositório:**

```bash
git clone https://github.com/jackelineferreira/T1---Dev.-Full-Stack-Jr.-praTi-Codifica-.git
cd T1---Dev.-Full-Stack-Jr.-praTi-Codifica-
```

2. **Abra no VS Code:**

```bash
code .
```

3. **Verifique a instalação do Node.js:**

```bash
node -v
```

Se exibir a versão do Node, está tudo pronto.

## 🚀 Executando os exercícios

Cada exercício está comentado individualmente no arquivo `exercicios.js`. Para executá-los:

1. Abra o terminal Git Bash no VS Code  
2. Execute o script com o comando:

```bash
node ex03-classifica-idade.js
```

3. Para executar um exercício específico, copie o código dele para um arquivo separado, ex: `exercicio3.js`, e rode:

```bash
node ex03-classifica-idade.js
```

Para exercícios que pedem entrada de dados pelo usuário, instale a biblioteca `readline-sync`:

```bash
npm install readline-sync
```

No seu código, importe e utilize assim:

```javascript
const readline = require('readline-sync');
let numero = readline.question('Digite um número: ');
```

## 📄 Lista de Exercícios

1. Verifica se o número é par ou ímpar  
2. Classifica idade em categorias  
3. Classifica nota  
4. Menu com switch-case  
5. Cálculo de IMC  
6. Verificação de tipo de triângulo  
7. Cálculo de valor total da compra de maçãs  
8. Ordenação crescente de dois números  
9. Contagem regressiva  
10. Impressão repetida de número  
11. Soma de 5 números  
12. Tabuada de um número  
13. Média de números decimais até zero  
14. Cálculo de fatorial  
15. Sequência de Fibonacci  

---

📌 Em caso de dúvidas, consulte a documentação oficial do Node.js e Git ou entre em contato.

🚀 Bons estudos!
