const numbers = [1, 2, 3, 4, 5, "teste"];
// teste se ao menos um dos elementos no array passa no teste implementado pela função atrbuída e retorna um valor true ou false
const peloMenosUmItemNaoENumber = numbers.some(
  (item) => typeof item !== "number"
);
console.log(peloMenosUmItemNaoENumber);
