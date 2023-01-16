const numbers = [1, 2, 3, 4, 5];
// retorna um novo array do mesmo tamanho do array "mapeado"
const newArray = numbers.map((number) => {
  if (number % 2 === 0) return number * 10;
  return number;
});

console.log(numbers);
console.log(newArray);
