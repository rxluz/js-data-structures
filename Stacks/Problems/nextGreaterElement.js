const Stack = (() => {
  let items = [];

  class PublicStack {
    peek() {
      if (this.isEmpty()) throw new Error("Stack is empty");
      const lastItemIndex = items.length - 1;

      return items[lastItemIndex];
    }

    pop() {
      if (this.isEmpty()) throw new Error("Stack is empty");

      return items.pop();
    }

    push(data) {
      items.push(data);
    }

    isEmpty() {
      return this.size() === 0;
    }

    size() {
      return items.length;
    }
  }

  return PublicStack;
})();

const nextGreaterElement = (list, element) => {
  //creates a stack that only receives the elements that is located after the current element
  let elementsAfterStack = new Stack();

  //controls which elements will be added in element
  let startAdding = false;

  //loops the list to check what's the elements after the current element
  list.forEach(currentElement => {
    // this is runnned before to avoid add the searched number in elementsAfterStack
    if (startAdding) {
      elementsAfterStack.push(currentElement);
    }

    // case the current element inside the loop be the same searched element sets the start adding to true, with this the numbers in the next interation will be added in stack
    if (currentElement === element) {
      startAdding = true;
    }
  });

  // the number could be not found, that's the reason that we define this number as null before starts the loop
  let nextGreaterElementValue = null;

  /* execute the full loop removing in each interation the top number until there are no numbers inside the stack, 
     always when some number greater than actual is founded replaces the current nextGreaterElementValue to this */
  while (!elementsAfterStack.isEmpty()) {
    if (elementsAfterStack.peek() > element) {
      nextGreaterElementValue = elementsAfterStack.peek();
    }

    // we need remove this item from the stack, with this in the next interation other item will be checked
    elementsAfterStack.pop();
  }

  return nextGreaterElementValue;
};

const test = (description, condition, expected) =>
  console.log(
    `Testing: ${description} \nResult: ${
      JSON.stringify(condition) === JSON.stringify(expected)
        ? "PASSED"
        : "FAILED"
    } \nOutput: ${JSON.stringify(condition)} \n------------------------\n`,
  );

elementsToTest = [11, 1, 3, 4, 90, 2, 8, 33, 15];
elementsToTest2 = [11];

test("Checking the number 11", nextGreaterElement(elementsToTest, 11), 90);
test("Checking the number 1", nextGreaterElement(elementsToTest, 1), 3);
test("Checking the number 4", nextGreaterElement(elementsToTest, 4), 90);
test("Checking the number 200", nextGreaterElement(elementsToTest, 200), null);

test("Checking the number 11", nextGreaterElement(elementsToTest2, 11), null);
test("Checking the number 1", nextGreaterElement(elementsToTest2, 1), null);
test("Checking the number 4", nextGreaterElement(elementsToTest2, 4), null);
test("Checking the number 200", nextGreaterElement(elementsToTest2, 200), null);

test("Checking the number 11", nextGreaterElement(elementsToTest2, 0), null);
test("Checking the number 1", nextGreaterElement(elementsToTest2, 0), null);
test("Checking the number 4", nextGreaterElement(elementsToTest2, 0), null);
test("Checking the number 200", nextGreaterElement(elementsToTest2, 0), null);
