const numbers = [1, 2, 3, 4, 5];

// encontra o primeiro item que satisfaz a condição
const par = numbers.find((item) => item % 2 === 0);
console.log(par);
// retorna o indice do primeiro item que satisfaz a condicação
const parIndex = numbers.findIndex((item) => item % 2 === 0);
console.log(parIndex);
