function Stack() {
  this.items = [];

  this.push = item => this.items.push(item);

  this.pop = () => this.items.pop();

  this.peek = () => this.items[this.items.length - 1];

  this.isEmpty = () => this.items.length === 0;

  this.size = () => this.items.length;

  this.clear = () => ((this.items = []), this.items);

  this.print = () => this.items.toString();
}

function testStack() {
  const myStack = new Stack();

  console.log(myStack.isEmpty());
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  console.log(myStack.isEmpty());
  console.log(myStack.size());
  myStack.pop();

  console.log(myStack.size());

  console.log(myStack.peek());
}

class StackES6 {
  constructor() {
    this.items = [];
  }

  push(item) {
    return this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];

    return this.items;
  }

  print() {
    return this.items.toString();
  }
}

function testStackES6() {
  const myStack = new StackES6();

  console.log(myStack.isEmpty());
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  console.log(myStack.isEmpty());
  console.log(myStack.size());
  myStack.pop();

  console.log(myStack.size());

  console.log(myStack.peek());
}

testStackES6();
