function Set() {
  let items = {}
  let size = 0

  class PublicSet {
    has(item) {
      return item in items
    }

    add(item) {
      if (this.has(item)) {
        return false
      }

      items[item] = item
      size++
      return true
    }

    delete(item) {
      if (!this.has(item)) {
        return false
      }

      delete items[item]

      size--

      return true
    }

    clear() {
      items = {}
      size = 0

      return true
    }

    size() {
      return size
    }

    values() {
      let itemsValue = []

      for (let value in items) {
        itemsValue.push(items[value])
      }

      return itemsValue
    }

    union(secondSet) {
      const unionSet = new PublicSet()

      const firstSetValues = this.values()
      const secondSetValues = secondSet.values()

      firstSetValues.forEach(value => {
        unionSet.add(value)
      })

      secondSetValues.forEach(value => {
        unionSet.add(value)
      })

      return unionSet
    }

    intersection(secondSet) {
      const intersectionSet = new PublicSet()

      const firstSetValues = this.values()
      const secondSetValues = secondSet.values()

      firstSetValues.forEach(value => {
        if (secondSet.has(value)) {
          console.log(value, 'first')
          intersectionSet.add(value)
        }
      })

      secondSetValues.forEach(value => {
        if (this.has(value)) {
          console.log(value, 'second')
          intersectionSet.add(value)
        }
      })

      return intersectionSet
    }
  }

  return new PublicSet()
}

const mySetABC = new Set()
mySetABC.add('a')
mySetABC.add('b')
mySetABC.add('c')

const mySetADEF = new Set()
mySetADEF.add('a')
mySetADEF.add('d')
mySetADEF.add('e')
mySetADEF.add('f')

console.log(mySetABC.values())

// console.log(mySet.add('other thing'))
// console.log(mySet.values())
// console.log(mySet.size())
// console.log(mySet.has('anything'))
// console.log(mySet.delete('anything'))
// console.log(mySet.size())
// console.log(mySet.clear())
// console.log(mySet.size())
// console.log(mySet.values())
