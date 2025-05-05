//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)

const prompt = require('prompt-sync')();

  let peso = parseFloat(prompt("Digite seu peso (kg): "));
  let altura = parseFloat(prompt("Digite sua altura (m): "));
  const imc = peso / (altura * altura)

  if(imc <= 18.5){
      console.log("Magreza (Abaixo do peso)")
  }else if(imc > 18.5 && imc <= 24.9){
      console.log("Peso ideal")
  }else if(imc >25 && imc < 29.9){
      console.log("Sobrepeso")
  }else(console.log("Obesidade"))

