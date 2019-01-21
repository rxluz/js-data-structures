const animals = ["elephant", "monkey", "snake", "lion"];

const desiredPositionToRemove = 2;

for (var index = desiredPositionToRemove; index < animals.length; index++) {
  animals[index] = animals[index + 1];
}

animals.length = animals.length - 1;

console.log(animals); // will return [ 'elephant', 'monkey', 'lion' ]
