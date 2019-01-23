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

const reverseString1 = currentString => {
  let stringLettersStack = new Stack();

  let stringLetters = "";

  for (let index = 0; index < currentString.length; index++) {
    stringLettersStack.push(currentString[index]);
  }

  while (!stringLettersStack.isEmpty()) {
    stringLetters += stringLettersStack.pop();
  }

  return stringLetters;
};

const test = (description, condition, expected) =>
  console.log(
    `Testing: ${description} \nResult: ${
      JSON.stringify(condition) === JSON.stringify(expected)
        ? "PASSED"
        : "FAILED"
    } \nOutput: ${JSON.stringify(condition)} \n------------------------\n`,
  );

test("Checking string ABC", reverseString("ABC"), "CBA");
test("Checking string RICARDO", reverseString("RICARDO"), "ODRACIR");
test("Checking string A", reverseString("A"), "A");
