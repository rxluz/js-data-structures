const animals = ["elephant", "monkey", "snake", "lion"];

for (let index = 0; index < animals.length; index++) {
  animals[index] = animals[index + 1];
}

animals.length = animals.length - 1;

console.log(animals);
