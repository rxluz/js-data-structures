const animals = ["elephant", "monkey", "snake", "lion"];

for (let index = animals.length; index > 0; index--) {
    animals[index] = animals[index - 1];
}

animals[0] = "macaw";

console.log(animals); // will return [ 'macaw', 'elephant', 'monkey', 'snake', 'lion' ]