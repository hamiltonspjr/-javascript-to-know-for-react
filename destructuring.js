const user = {
  name: "Hamilton",
  idade: 26,
  address: {
    street: "Rua teste",
    number: 999,
  },
};

const { address } = user;
console.log(address);
// mudando o nome de uma variável na destructuring
const { idade: age } = user;
console.log(age);

function showAge({ idade }) {
  return idade;
}
console.log(showAge(user));
