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
      const unionSet = new Set()

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
      const intersectionSet = new Set()

      const firstSetValues = this.values()
      const secondSetValues = secondSet.values()

      firstSetValues.forEach(value => {
        if (secondSet.has(value)) {
          intersectionSet.add(value)
        }
      })

      secondSetValues.forEach(value => {
        if (this.has(value)) {
          intersectionSet.add(value)
        }
      })

      return intersectionSet
    }

    difference(secondSet) {
      const differenceSet = new Set()

      const firstSetValues = this.values()

      firstSetValues.forEach(value => {
        if (!secondSet.has(value)) {
          differenceSet.add(value)
        }
      })

      return differenceSet
    }

    subset(secondSet) {
      if (secondSet.size() < this.size()) {
        return false
      }

      return this.values().every(value => secondSet.has(value))
    }
  }

  return new PublicSet()
}

const mySetABC = new Set()
mySetABC.add('a')
mySetABC.add('b')
// mySetABC.add('c')
// mySetABC.add('d')
// mySetABC.add('e')
// mySetABC.add('f')

const mySetADEF = new Set()
mySetADEF.add('a')
mySetADEF.add('b')
mySetADEF.add('d')
mySetADEF.add('e')
mySetADEF.add('f')

// console.log(mySetADEF.values())
console.log(mySetABC.subset(mySetADEF))

// console.log(mySet.add('other thing'))
// console.log(mySet.values())
// console.log(mySet.size())
// console.log(mySet.has('anything'))
// console.log(mySet.delete('anything'))
// console.log(mySet.size())
// console.log(mySet.clear())
// console.log(mySet.size())
// console.log(mySet.values())
