const animals = ["elephant", "monkey", "snake", "lion"];

const haveMonkeyInList = animals.indexOf("monkey") > -1;

const positionWhereMonkeyWasFound = animals.indexOf("monkey");

console.log({ haveMonkeyInList, positionWhereMonkeyWasFound });
// will output: { haveMonkeyInList: true, positionWhereMonkeyWasFound: 1 }
