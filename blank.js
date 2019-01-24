class Node {
  constructor(data) {
    this.data = data;
  }
}

var top = new Node("hello");

var myTop = top;

top.data = "its me";

console.log(myTop);
