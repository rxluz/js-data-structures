const animals = ["elephant", "monkey", "snake", "lion"];

const positionToAddNewItem = 2;

for (let index = animals.length; index > positionToAddNewItem; index--) {
  animals[index] = animals[index - 1];
}

animals[positionToAddNewItem] = "macaw";

console.log(animals); // will return: [ 'elephant', 'monkey', 'macaw', 'snake', 'lion' ]
