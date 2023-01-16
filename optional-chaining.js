const user = {
  name: "Hamilton",
  age: 26,
  adress: {
    street: "Rua teste",
    number: 999,
    zip: {
      code: "89160000",
      city: "Pelotas",
    },
  },
};

// tenta acessar uma propriedade e se ela não existir, não continua
console.log(user.adress?.zip?.code ?? "não informado");
