const user = {
  name: "Hamilton",
  idade: 26,
  address: {
    street: "Rua teste",
    number: 999,
  },
};

const { name, ...rest } = user;
// contém todas as propriedades que sobram no objeto
console.log(rest);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...restTwo] = numbers;
console.log(first);
console.log(second);
console.log(restTwo);
