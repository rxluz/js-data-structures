const PriorityQueue = (() => {
  let priority = {
    size: 0,
    first: null,
    last: null,
  };

  let nonPriority = {
    size: 0,
    first: null,
    last: null,
  };

  class Node {
    constructor(data) {
      this.next = null;
      this.data = data;
    }
  }

  class PublicPriorityQueue {
    size() {
      return priority.size + nonPriority.size;
    }

    isEmpty() {
      return this.size() === 0;
    }

    peek() {
      const element = priority.size > 0 ? priority : nonPriority;
      return element.first.data;
    }

    print() {
      const utils = {
        addComma(data) {
          return data !== "" ? ", " : "";
        },
        getDataFromInnerElements(element) {
          if (element == null) {
            return "";
          }

          const innerElements = utils.getDataFromInnerElements(element.next);

          return `${element.data}${utils.addComma(
            innerElements,
          )}${innerElements}`;
        },
      };

      const priorityDataItems = utils.getDataFromInnerElements(priority.first);
      const nonPriorityDataItems = utils.getDataFromInnerElements(
        nonPriority.first,
      );

      return `${priorityDataItems}${utils.addComma(
        priorityDataItems,
      )}${nonPriorityDataItems}`;
    }

    enqueue(data, isPriority = 0) {
      const utils = {
        dataNode: new Node(data),
        element: isPriority === 1 ? priority : nonPriority,
        increase() {
          utils.element.size++;
        },
      };

      if (utils.element.first === null) {
        utils.element.first = utils.dataNode;
        utils.element.last = utils.dataNode;
      } else {
        utils.element.last.next = utils.dataNode;
        utils.element.last = utils.dataNode;
      }

      utils.increase();
    }

    dequeue() {
      const utils = {
        element: priority.size > 0 ? priority : nonPriority,
        currentElementCopy: Object.assign(
          {},
          (priority.size > 0 ? priority : nonPriority).first,
        ),

        decrease() {
          utils.element.size--;
        },
      };

      if (this.isEmpty()) throw new Error("The queue is empty");

      utils.element.first = utils.element.first.next;

      utils.decrease();

      return utils.currentElementCopy.data;
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
