//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. 

const prompt = require('prompt-sync')();

      let soma = 0;
      let quantidade = 0;
      let numero = 0

      do {
          numero = parseFloat(prompt("Digite um número (0 para sair):"));
        
          if (isNaN(numero)) {
              console.log("Valor inválido. Digite um número.");
              continue; 
          }

          if (numero !== 0) {
              soma += numero;
              quantidade++;
          }
      } while (numero !== 0);

      if (quantidade === 0) {
          console.log("Nenhum número foi digitado.");
      } else {
          const media = soma / quantidade;
          console.log(`Média aritmética: ${media.toFixed(2)}`);
      }
 
