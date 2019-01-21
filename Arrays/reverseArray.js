const animals = ["elephant", "monkey", "snake", "lion", "zebra"];

const reverseArray = currentArray => {
  for (let index = 0; index < currentArray.length / 2; index++) {
    const currentItem = currentArray[index];
    const otherItem = currentArray[currentArray.length - 1 - index];

    currentArray[index] = otherItem;
    currentArray[currentArray.length - 1 - index] = currentItem;
  }

  return currentArray;
};

const animalsReversed = reverseArray(animals);

console.log(animalsReversed);
