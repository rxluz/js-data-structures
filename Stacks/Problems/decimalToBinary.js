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

const decimalToBinary = num => {
  let currentNum = num;
  let binaryList = new Stack();
  let binaryString = "";

  if (num === 0) {
    return "0";
  }

  while (currentNum > 0) {
    binaryList.push(currentNum % 2);
    currentNum = Math.floor(currentNum / 2);
  }

  while (!binaryList.isEmpty()) {
    binaryString += binaryList.pop();
  }

  return binaryString;
};

const test = (description, condition, expected) =>
  console.log(
    `Testing: ${description} \nResult: ${
      JSON.stringify(condition) === JSON.stringify(expected)
        ? "PASSED"
        : "FAILED"
    } \nOutput: ${JSON.stringify(condition)} \n------------------------\n`,
  );

test("Checking the number 10", decimalToBinary(10), "1010");
test("Checking the number 0", decimalToBinary(0), "0");
test("Checking the number 2", decimalToBinary(2), "10");
test("Checking the number 3", decimalToBinary(300), "100101100");
