function Map() {
  let items = {}
  let size = 0

  class PublicMap {
    has(key) {
      return key in items
    }

    set(key, value) {
      if (!this.has(key)) {
        size++
      }

      items[key] = value

      return true
    }

    delete(key) {
      if (this.has(key)) {
        size--

        delete items[key]
      }
    }

    get(key) {
      return items[key]
    }

    clear() {
      items = {}
      size = 0
    }

    size() {
      return size
    }

    keys() {
      return Object.keys(items)
    }

    values() {
      return Object.values(items)
    }
  }

  return new PublicMap()
}

let myTest = new Map()

myTest.set('hello', 'world')

console.log(myTest.values())
console.log(myTest.keys())

let otherTest = new Map()
console.log(otherTest.values())
