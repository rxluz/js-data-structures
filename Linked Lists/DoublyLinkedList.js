function doublyLinkedList() {
  let head = null
  let tail = null
  let length = 0

  class Node {
    constructor(element) {
      this.element = element
      this.prev = null
      this.next = null
    }
  }

  class PublicLinkedList {
    size() {
      return length
    }

    isEmpty() {
      return this.size() === 0
    }

    append(element) {
      const newNode = new Node(element)

      if (this.isEmpty()) {
        //its means that this item will be the head and tail
        head = newNode
        tail = newNode
      } else if (this.size() === 1) {
        //its means that this DLL have only the head, so we need refer the newNode to the head
        head.next = newNode
        newNode.prev = head
        tail = newNode
      } else {
        // its means that this DLL have more than 1 item so we only need change the tail
        tail.next = newNode
        newNode.prev = tail
        tail = newNode
      }

      // in the end we need increase the length of our DLL
      length++

      return true
    }

    insert(position, element) {
      if (position < 0 || position > length) {
        throw new Error('Invalid position')
      }

      const newNode = new Node(element)

      if (position === 0) {
        // fist item
        if (this.isEmpty()) {
          // the DLL is empty, its meand that this element is the head and tail
          head = newNode
          tail = newNode
        } else if (this.size() === 1) {
          // the DLL has only one node, its meand that this current node is the new tail and the new node is the head
          head.prev = newNode
          tail = head
          newNode.next = tail
          head = newNode
        } else {
          // the DLL has more than one item, it's meand that the newNode is the head, and the current head will refer to newNode
          newNode.next = head
          head.prev = newNode
          head = newNode
        }
      } else if (position === length) {
        // this means that this item will be added in the end, so is possible to use the append method - we need add return to avoid increase the length 2 times
        return this.append(element)
      } else {
        // this means that this item will be added between the first and the last, we need search the current item that is placing the desired position and add the new item before this item
        let currentNode = head
        let currentPosition = 0

        while (currentPosition < position) {
          currentNode = currentNode.next
          currentPosition++
        }

        const prevNode = currentNode.prev
        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = currentNode
        currentNode.prev = newNode
      }

      // in the end we need increase the length
      length++
      return true
    }

    removeAt(position) {
      if (position < 0 || position >= length) {
        throw new Error('Invalid position')
      }

      if (position === 0) {
        //will remove a item from the beggining, to we need use the head attribute to do that
        if (this.size() === 1) {
          //we need change the head and the tail once this DLL has only one element
          head = null
          tail = null
        } else {
          // this DLL has more than one item, we need change the head
          head = head.next
          head.prev = null
        }
      } else if (position === length - 1) {
        //this case means that this item will be removed from tail
        tail = tail.prev
        tail.next = null
      } else {
        // this case means that this item will be remove from the middle
        let currentPosition = 0
        let currentNode = head

        while (currentPosition < position) {
          currentPosition++
          currentNode = currentNode.next
        }

        const prevNode = currentNode.prev
        const nextNode = currentNode.next

        prevNode.next = nextNode
        nextNode.prev = prevNode
      }

      // in the end we reduce the length and return true
      length--

      return true
    }

    remove(element) {
      if (this.isEmpty()) {
        throw new Error('The linked list is empty')
      }

      // first will check if the removed item is the head
      if (head.element === element) {
        if (this.size() === 1) {
          // in this case we'll need to remove the tail and the head
          head = null
          tail = null
        } else {
          // this case means that this DLL has at leat 2 items, so we need only change the head
          head = head.next
          head.prev = null
        }

        length--
        return true
      }

      if (tail.element === element) {
        // this means that we need remove the tail from this DLL
        tail = tail.prev
        tail.next = null

        length--
        return true
      }

      // this case means that we need search though all elements
      let currentNode = head.next

      while (currentNode !== null && currentNode.element !== element) {
        currentNode = currentNode.next
      }

      if (currentNode.element === element) {
        //this means that the item was found, so we could remove them
        let previousNode = currentNode.prev
        let nextNode = currentNode.next

        previousNode.next = nextNode
        nextNode.prev = previousNode

        length--
        return true
      }

      //this means that the item was not found

      return false
    }

    indexOf(element) {
      if (this.isEmpty()) {
        throw new Error('The linked list is empty')
      }

      for (
        let currentItem = head, positionItem = 0;
        currentItem !== null;
        currentItem = currentItem.next, positionItem++
      ) {
        if (currentItem.element === element) {
          return positionItem
        }
      }

      return -1
    }

    toString() {
      if (this.isEmpty()) {
        throw new Error('The list is empty')
      }

      let outputString = ''

      let currentNode = head

      const addComma = () => (outputString !== '' ? ', ' : '')

      for (
        let currentNode = head;
        currentNode !== null;
        currentNode = currentNode.next
      ) {
        outputString = `${outputString}${addComma()}${currentNode.element}`
      }

      return outputString
    }
  }

  return function() {
    return PublicLinkedList
  }
}

const myLinkedList = new doublyLinkedList()

myLinkedList.append('hello')
myLinkedList.append('hey')
myLinkedList.append('last item')
console.log(myLinkedList.toString())

const mySecondLinkedList = new doublyLinkedList()

mySecondLinkedList.append('second')

console.log(mySecondLinkedList.toString())

// console.log(mySecondLinkedList.toString())

// myLinkedList.insert(2, 'item before last item')

// myLinkedList.removeAt(3)

// console.log(myLinkedList.toString())
// console.log(myLinkedList.remove('item before last item'))

// console.log(myLinkedList.toString())

// console.log(
//   `position of hey: ${myLinkedList.indexOf("item before last item")}`,
// );

// // console.log(myLinkedList.removeAt(1));
// console.log(myLinkedList.remove("item before last item"));
// console.log(myLinkedList.remove("item before last item"));
// console.log(myLinkedList.remove("hello"));

// console.log(myLinkedList.print());

// // console.log(myLinkedList.removeAt(0));

// console.log(myLinkedList.print());
// console.log(myLinkedList.removeAt(1));

// console.log(myLinkedList.print());
