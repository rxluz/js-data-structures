const animals = ["elephant", "monkey", "snake", "lion"];

const animalsWithLetterE = animals.filter(animal => animal.indexOf("e") > -1);

console.log(animalsWithLetterE);
// will output: [ 'elephant', 'monkey', 'snake' ]
