//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido

const prompt = require('prompt-sync')();

  const idade = prompt("Digite sua idade: ")

  if (idade <= 12) {
      console.log("ainda é uma criança")
  } else if(idade <= 17) {
      console.log("Fase chatinha Adolescente")
  } else if(idade <= 59){
      console.log("Ta um adulto")
  }else( console.log("Ixi tem que aposentar em"))


