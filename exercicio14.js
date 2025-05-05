// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
const prompt = require('prompt-sync')();

 let fatorial = parseInt(prompt("Digite um número para o fatorial: "));
 let resultado = 1;
 for (let i = 1; i <= fatorial; i++) resultado *= i;
 console.log(`Fatorial de ${fatorial} é ${resultado}`);

