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

      return this.top;
    }

    pop() {
      if (this.isEmpty()) throw new Error("This stack is empty");

      const temp = top;
      top = top.previous;
      size--;
      return temp;
    }

    peek() {
      if (this.isEmpty()) throw new Error("This stack is empty");

      return top.data;
    }

    isEmpty() {
      return size === 0;
    }

    clear() {
      top = null;
    }

    size() {
      return size;
    }
  }

  return PublicStack;
})();

const myStack = new Stack();
myStack.push("hellodd");
myStack.push("hello new item");
myStack.push("hello new other item");
myStack.push("hello");
myStack.pop();

myStack.pop();
myStack.pop();

// const myOtherStack = Stack();

// myOtherStack.setItsMe("hey hey hey");

console.log(myStack.size());
console.log(myStack.peek());
// console.log(myStack.print());
