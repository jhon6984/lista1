//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
const prompt = require('prompt-sync')();

  let somaUsuario = 0;
  for (let i = 0; i < 5; i++) {
    somaUsuario += parseFloat(prompt(`Digite o ${i+1} número: `));
  }
  console.log("Soma total:", somaUsuario);

