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

const myStack = new Stack();

myStack.push("hello");
myStack.push("its me");
myStack.push("other important item");

console.log(myStack.size(), " - current stack sizeˆ");
console.log(myStack.peek(), " - current stack last item");

myStack.pop();

console.log(myStack.size(), " - current stack size");
console.log(myStack.isEmpty(), " - checks is stack is empty");
console.log(myStack.peek(), " - current stack last item");
