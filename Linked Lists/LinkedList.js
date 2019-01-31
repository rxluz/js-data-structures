const LinkedList = (() => {
  let head = null
  let length = 0

  class Utils {
    static node(element) {
      this.element = element
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
      const newNode = Utils.node(element)

      if (this.isEmpty()) {
        head = newNode
      } else {
        let currentLastNode = head

        while (currentLastNode.next !== null) {
          currentLastNode = currentLastNode.next
        }

        currentLastNode.next = newNode
      }

      length++
    }

    insert(position, element) {
      if (position < 0 || position > length) {
        throw new Error('Invalid position')
      }

      const newNode = Utils.node(element)

      if (position === 0) {
        newNode.next = head
        head = newNode
      } else {
        let previousNode = head
        let nextNode = head.next

        let currentNode = head
        let currentPosition = 0

        while (currentPosition++ < position) {
          previousNode = currentNode
          nextNode = currentNode.next
          currentNode = currentNode.next
        }

        previousNode.next = newNode
        newNode.next = nextNode
      }

      length++

      return true
    }

    remove(element) {
      if (this.isEmpty()) {
        throw new Error('The linked list is empty')
      }

      if (head.element === element) {
        head = head.next
        length--
        return true
      }

      let currentNode = head
      let previousNode

      while (currentNode !== null && currentNode.element !== element) {
        previousNode = currentNode
        currentNode = currentNode.next
      }

      if (currentNode === null || currentNode.element !== element) {
        return false
      }

      previousNode.next = currentNode.next

      length--

      return true
    }

    removeAt(position) {
      if (this.isEmpty()) {
        throw new Error('The linked list is empty')
      }

      if (position < 0 || position > length - 1) {
        throw new Error('Invalid position')
      }

      length--

      if (position === 0) {
        const currentHead = Object.assign({}, head)

        head = currentHead.next

        return currentHead.element
      }

      let currentPosition = 0
      let currentNode = head
      let previousNode

      while (currentPosition < position) {
        previousNode = currentNode
        currentNode = currentNode.next

        currentPosition++
      }

      previousNode.next = currentNode.next

      return currentNode.element
    }

    toString() {
      if (this.isEmpty()) {
        throw new Error('The linked list is empty')
      }

      let outputString = ''

      const addComma = currentString => (currentString !== '' ? ', ' : '')

      for (
        let currentItem = head;
        currentItem !== null;
        currentItem = currentItem.next
      ) {
        outputString = `${outputString}${addComma(outputString)}${
          currentItem.element
        }`
      }

      return outputString
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
  }

  return PublicLinkedList
})()

// const myLinkedList = new LinkedList()

// myLinkedList.append('hello')
// myLinkedList.append('hey')
// myLinkedList.append('last item')

// myLinkedList.insert(3, 'item before last item')
// console.log(myLinkedList.toString())

// console.log(`position of hey: ${myLinkedList.indexOf('item before last item')}`)

// // console.log(myLinkedList.removeAt(1));
// console.log(myLinkedList.remove('item before last item'))
// console.log(myLinkedList.remove('item before last item'))
// console.log(myLinkedList.remove('hello'))

// console.log(myLinkedList.toString())

// // console.log(myLinkedList.removeAt(0));

// console.log(myLinkedList.toString())
// console.log(myLinkedList.removeAt(1))

// console.log(myLinkedList.toString())
