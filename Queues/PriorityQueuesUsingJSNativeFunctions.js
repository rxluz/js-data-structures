const PriorityQueue = (() => {
  let priority = [];
  let nonPriority = [];

  class PublicPriorityQueue {
    size() {
      return priority.length + nonPriority.length;
    }

    isEmpty() {
      return this.size() === 0;
    }

    enqueue(data, isPriority = 0) {
      const element = isPriority === 1 ? priority : nonPriority;
      element.push(data);
    }

    dequeue() {
      const element = priority.length > 0 ? priority : nonPriority;
      return element.shift();
    }

    peek() {
      const element = priority.length > 0 ? priority : nonPriority;
      return element[0];
    }

    print() {
      return [...priority, ...nonPriority].toString();
    }
  }

  return PublicPriorityQueue;
})();

const myPriorityQueue = new PriorityQueue();

myPriorityQueue.enqueue("first item");
myPriorityQueue.enqueue("second item");
myPriorityQueue.enqueue("third item - priority", 1);
myPriorityQueue.enqueue("fourth item");
myPriorityQueue.enqueue("fifth item");
myPriorityQueue.enqueue("sixth item - priority", 1);
myPriorityQueue.enqueue("seventh item");

console.log(myPriorityQueue.peek());

console.log(myPriorityQueue.print());

console.log("dequeue");
console.log(myPriorityQueue.dequeue());

console.log("peek");
console.log(myPriorityQueue.peek());
console.log(myPriorityQueue.print());

console.log("dequeue");
console.log(myPriorityQueue.dequeue());

console.log(myPriorityQueue.print());

console.log("peek");
console.log(myPriorityQueue.peek());
console.log(myPriorityQueue.size());

console.log("dequeue");
console.log(myPriorityQueue.dequeue());

console.log(myPriorityQueue.print());

console.log("peek");
console.log(myPriorityQueue.peek());

console.log("dequeue");
console.log(myPriorityQueue.dequeue());

console.log(myPriorityQueue.print());

console.log("peek");
console.log(myPriorityQueue.peek());
console.log(myPriorityQueue.size());
