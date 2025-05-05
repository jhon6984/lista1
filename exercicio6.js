//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();

  const ladoA = parseFloat(prompt("Digite o valor do lado A: "));
  const ladoB = parseFloat(prompt("Digite o valor do lado B: "));
  const ladoC = parseFloat(prompt("Digite o valor do lado C: "));

  if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
       if (ladoA ===ladoB && ladoB === ladoC) console.log("Equilátero");
      else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) console.log("Isósceles");
      else console.log("Escaleno");
    } else console.log("Não é um triângulo");

