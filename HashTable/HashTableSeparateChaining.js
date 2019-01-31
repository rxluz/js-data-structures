function LinkedList() {
  let head = null
  let size = 0

  class Utils {
    static node(element) {
      return {
        element,
        next: null,
      }
    }

    static handleElement(element) {
      if (typeof element !== 'string') {
        return JSON.stringify(element)
      } else {
        return element
      }
    }
  }

  class PublicLinkedList {
    append(element) {
      let current = this.getHead()
      let node = Utils.node(element)

      if (this.isEmpty()) {
        head = node
        size++
        return true
      }

      while (current && current.next) {
        current = current.next
      }

      current.next = node
      size++
    }

    remove(elem) {
      let element = Utils.handleElement(elem)
      let current = this.getHead()

      if (Utils.handleElement(current.element) === element) {
        head = current.next
        size--
        return true
      }

      let previous = null

      while (current && Utils.handleElement(current.element) !== element) {
        previous = current
        current = current.next
      }

      if (
        previous &&
        current &&
        Utils.handleElement(current.element) === element
      ) {
        previous.next = current.next
        size--
        return true
      }

      return false
    }

    size() {
      return size
    }

    isEmpty() {
      return this.size() === 0
    }

    getHead() {
      return head
    }
  }

  return new PublicLinkedList()
}

function HashTable() {
  let table = []
  let size = 0

  class Utils {
    static item(key, value) {
      return {
        key,
        value,
        toString: () => `['${key}', '${value}']`,
      }
    }

    static addComma(content) {
      return content !== '' ? ', ' : ''
    }

    static djb2(key) {
      let hash = 5381
      let keyChars = key.split('')

      keyChars.forEach(chr => {
        hash = hash * 33 + chr.charCodeAt(0)
      })

      return hash % 1013
    }
  }

  class PublicHashTable {
    put(key, value) {
      const index = Utils.djb2(key)

      if (!table[index]) table[index] = new LinkedList()

      let current = table[index].getHead()

      while (current && current.element && current.element.key !== key) {
        current = current.next
      }

      if (current && current.element && current.element.key === key) {
        table[index].remove(current.element)
      } else {
        size++
      }

      let item = Utils.item(key, value)

      table[index].append(item)

      return true
    }

    remove(key) {
      const index = Utils.djb2(key)

      if (this.isEmpty() || !table[index]) return false

      let current = table[index].getHead()

      while (current && current.element && current.element.key !== key) {
        current = current.next
      }

      if (current && current.element && current.element.key === key) {
        table[index].remove(current.element)
        size--

        return true
      }

      return false
    }

    has(key) {
      const index = Utils.djb2(key)

      if (this.isEmpty() || !table[index]) return false

      let current = table[index].getHead()

      while (current && current.element && current.element.key !== key) {
        current = current.next
      }

      if (current && current.element && current.element.key === key) return true

      return false
    }

    get(key) {
      const index = Utils.djb2(key)

      if (this.isEmpty() || !table[index]) return undefined

      let current = table[index].getHead()

      while (current && current.element && current.element.key !== key) {
        current = current.next
      }

      if (current && current.element && current.element.key === key) {
        return current.element.value
      }

      return undefined
    }

    values() {
      let allValues = []

      if (this.isEmpty()) return allValues

      table.forEach(item => {
        let current = item.getHead()

        while (current && current.element) {
          allValues.push(current.element.value)
          current = current.next
        }
      })

      return allValues
    }

    keys() {
      let allKeys = []

      if (this.isEmpty()) return allKeys

      table.forEach(item => {
        let current = item.getHead()

        while (current && current.element) {
          allKeys.push(current.element.value)
          current = current.next
        }
      })

      return allKeys
    }

    toString() {
      let content = ''

      if (this.isEmpty()) return content

      table.forEach(item => {
        let current = item.getHead()

        while (current && current.element) {
          const comma = Utils.addComma(content)
          content += `${comma}${current.element.toString()}`
          current = current.next
        }
      })

      return content
    }

    size() {
      return size
    }

    isEmpty() {
      return this.size() === 0
    }

    clear() {
      table = []
      size = 0
    }
  }

  return new PublicHashTable()
}

const myHashTable = new HashTable()

myHashTable.put('ellho', '1world')
myHashTable.put('hello', '2worl1d')
myHashTable.put('helol', '3world')
myHashTable.put('llheo', '4world')
myHashTable.put('oehll', '5world')
myHashTable.put('ohlle', '6world')
myHashTable.put('loleh', '7world')
myHashTable.put('other item', '8value')
console.log(myHashTable.size('other item1'))
console.log(myHashTable.remove('other item'))
console.log(myHashTable.size('other item1'))

console.log(myHashTable.toString())
