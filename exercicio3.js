//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado"

const prompt = require('prompt-sync')();

 const nota = prompt("Digite a nota recebida: ")

 if(nota >=7){
      console.log("ta aprovado voa dog")
  }else if(nota >=5 && nota < 7){
      console.log("Da pra salvar ainda recuperação")
  } else(console.log("Infelizmente deu mole e reprovou "))

