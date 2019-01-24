const Queue = (() => {
  let first = null;
  let last = null;
  let size = 0;

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class PublicQueue {
    size() {
      return size;
    }

    isEmpty() {
      return this.size() === 0;
    }

    peek() {
      if (this.isEmpty()) throw new Error("The queue is empty");

      return first.data;
    }

    print() {
      if (this.isEmpty()) throw new Error("The queue is empty");

      const utils = {
        addComma(data) {
          return data !== "" ? ", " : "";
        },
        getInnerItems(node) {
          if (node == null) {
            return "";
          }
          const innerContent = utils.getInnerItems(node.next);

          return `${node.data}${utils.addComma(innerContent)}${innerContent}`;
        },
      };

      return utils.getInnerItems(first);
    }

    enqueue(data) {
      const utils = {
        nodeData: new Node(data),
        increase() {
          size++;
        },
      };

      if (last !== null) {
        last.next = utils.nodeData;
      }

      last = utils.nodeData;

      if (first == null) {
        first = utils.nodeData;
      }

      utils.increase();
    }

    dequeue() {
      if (this.isEmpty()) throw new Error("The queue is empty");

      const utils = {
        previousFirst: Object.assign({}, first),
        decrease() {
          size--;
        },
      };

      first = first.next;

      if (first === null) {
        last = null;
      }

      utils.decrease();

      return utils.previousFirst.data;
    }
  }

  return PublicQueue;
})();

const myQueue = new Queue();

console.log("isEmpty");
console.log(myQueue.isEmpty());

myQueue.enqueue("first item");
myQueue.enqueue("second item");
myQueue.enqueue("third item");
myQueue.enqueue("fourth item");
myQueue.enqueue("fifth item");
myQueue.enqueue("sixth item");
myQueue.enqueue("seventh item");

console.log(myQueue.peek());
console.log(myQueue.print());

console.log("dequeue");
console.log(myQueue.dequeue());

console.log("peek");
console.log(myQueue.peek());
console.log("size");
console.log(myQueue.size());

console.log("dequeue");
console.log(myQueue.dequeue());

console.log("print");
console.log(myQueue.print());

console.log("peek");
console.log(myQueue.peek());

console.log("size");
console.log(myQueue.size());
