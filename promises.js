const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

sum(1, 4);
//.then((resolve) => console.log(resolve))
//.catch((error) => console.log(error));

fetch("https://api.github.com/users/hamiltonspjr")
  .then((response) => response.json())
  .then((body) => console.log(body))
  .catch((error) => console.log(error))
  .finally(() => console.log("deu"));

async function getDataForGithub() {
  try {
    const response = await fetch("https://api.github.com/users/hamiltonspjr");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("funcionou o async");
  }
}

getDataForGithub();
