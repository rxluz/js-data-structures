const Queue = (() => {
  let items = [];

  class PublicQueue {
    size() {
      return items.length;
    }

    isEmpty() {
      return this.size() === 0;
    }

    enqueue(data) {
      items.push(data);
    }

    dequeue() {
      items.shift();
    }

    front() {
      if (this.isEmpty()) {
        throw new Error("The queue is empty");
      }

      return items[0];
    }

    print() {
      if (this.isEmpty()) {
        throw new Error("The queue is empty");
      }
      return items.toString();
    }
  }

  return PublicQueue;
})();

const myQueue = new Queue();

myQueue.enqueue("first item");
myQueue.enqueue("second item");
myQueue.enqueue("third item");
myQueue.enqueue("fourth item");
myQueue.enqueue("fifth item");
myQueue.enqueue("sixth item");
myQueue.enqueue("seventh item");

console.log(myQueue.front());
console.log(myQueue.print());
myQueue.dequeue();

console.log(myQueue.front());
myQueue.dequeue();
console.log(myQueue.print());

console.log(myQueue.front());
console.log(myQueue.size());
myQueue.dequeue();
console.log(myQueue.print());

console.log(myQueue.front());
myQueue.dequeue();
console.log(myQueue.print());

console.log(myQueue.front());
console.log(myQueue.size());
