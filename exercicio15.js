//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let a = 0, b = 1;
console.log('OS 10 primeiros números da sequência de Fibonacci:');
for (let i = 0; i < 10; i++) {
    console.log(a);
    const temp = a + b;
    a = b;
    b = temp;
}