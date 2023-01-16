const numbers = [1, 2, 3, 4, 5];
// retorna true se todos os itens passarem na condição
const todosItensSaoNumeros = numbers.every((item) => typeof item === "number");
console.log(todosItensSaoNumeros);
