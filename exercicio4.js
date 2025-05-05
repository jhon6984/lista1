//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.

const prompt = require('prompt-sync')();

  console.log("\n=== MENU INTERATIVO ===")
  console.log("1. Saber uma curiosidade")
  console.log("2. Surpresa")
  console.log("3. Sair")
    
  const opcao = prompt("Escolha entre essas 3 opções: ")

  switch(opcao) {
      case "1":
        console.log("Minha cor preferida e Azul");
        break;
   case "2":
      console.log("Agora todo seu histórico de navegação vazou para sua fámilia");
      break;
  case "3":
      console.log("Saindo do programa...");
      return; 
    default:
      console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
  }

