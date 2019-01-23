const Stack = (() => {
  let top = null;
  let size = 0;

  class Node {
    constructor(data) {
      this.data = data;
      this.previous = null;
    }
  }

  class PublicStack {
    push(data) {
      const node = new Node(data);
      node.previous = top;
      top = node;
      size++;
    }

    peek() {
      return top.data;
    }

    pop() {
      const temp = top;
      top = top.previous;

      size--;

      return temp;
    }

    isEmpty() {
      return this.size() === 0;
    }

    size() {
      return size;
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