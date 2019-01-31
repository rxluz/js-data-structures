function HashTable() {
  let table = []

  class Utils {
    static item(key, value) {
      return {
        key,
        value,
        toString: () => `[${key}, ${value}]`,
      }
    }

    static djb2(key) {
      let hash = 5381

      const keyArray = key.split('')

      keyArray.forEach(chr => (hash = hash * 33 + chr.charCodeAt(0)))

      return hash % 1013
    }
  }

  class PublicHashTable {
    put(key, value) {
      let index = Utils.djb2(key)

      while (table[index] && table[index].key !== key) {
        index++
      }

      table[index] = Utils.item(key, value)
    }

    get(key) {
      let index = Utils.djb2(key)

      while (table[index] && table[index].key !== key) {
        index++
      }

      if (table[index] && table[index].key === key) {
        return table[index].value
      }

      return undefined
    }

    print() {
      console.log(table)
    }
  }

  return new PublicHashTable()
}

const myHashTable = new HashTable()

myHashTable.put('ellho', 'world')
myHashTable.put('ellho', 'world')
myHashTable.put('ellho', 'world')
myHashTable.put('ellho', 'world')
myHashTable.put('ellho', 'world')
myHashTable.put('ellho', 'world')
myHashTable.put('hello', 'worl1d')
// myHashTable.put('helol', 'world')
// myHashTable.put('llheo', 'world')
// myHashTable.put('oehll', 'world')
// myHashTable.put('ohlle', 'world')
// myHashTable.put('loleh', 'world')
// myHashTable.put('hello', 'world')
// myHashTable.put('other item', 'value')
console.log(myHashTable.get('hello'))
console.log(myHashTable.print())
