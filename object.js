const user = {
  name: "Hamilton",
  age: 26,
  address: {
    street: "Rua teste",
    number: 999,
  },
};

// expressão in para verificar se existe uma informação dentro do object
console.log("name" in user);

// retornar um array com todas as chaves do object
console.log(Object.keys(user));

// retornar um array com todos os valores de um object
console.log(Object.values(user));

// retorna um array com outros arrays dentro contendo chave e valor
console.log(Object.entries(user));
