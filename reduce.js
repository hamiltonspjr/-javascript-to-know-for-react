const numbers = [1, 2, 3, 4, 5];

// executa uma função reducer(fornecida pelo usuário) para cada elemento do array, resultando num único valor de retorno
const sum = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);
console.log(sum);
