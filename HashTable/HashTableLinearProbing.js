function HashTable() {
  let table = []
  let size = 0

  class Utils {
    static djb2(key) {
      let hash = 5381

      const keyChars = key.split('')

      keyChars.forEach(chr => (hash = hash * 33 + chr.charCodeAt(0)))

      return hash % 1013
    }

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
  }

  class PublicHashTable {
    put(key, value) {
      let index = Utils.djb2(key)

      while (table[index] && table[index].key !== key) {
        index++
      }

      if (!table[index]) {
        size++
      }

      table[index] = Utils.item(key, value)

      return true
    }

    get(key) {

      let index = Utils.djb2(key)

      if (this.isEmpty() || table[index]) return undefined

      while (table[index] && table[index].key !== key) {
        index++
      }

      if (table[index] && table[index].key === key) {
        return table[index].value
      }

      return undefined
    }

    remove(key) {
      if (this.isEmpty()) return false
      let index = Utils.djb2(key)

      while (table[index] && table[index].key !== key) {
        index++
      }

      if (table[index] && table[index].key === key) {
        delete table[index]
        size--

        return true
      }

      return true
    }

    has(key) {
      if (this.isEmpty()) return false
      let index = Utils.djb2(key)

      while (table[index] && table[index].key !== key) {
        index++
      }

      if (table[index] && table[index].key === key) {
        return true
      }

      return false
    }

    keys() {
      let keysList = []
      if (this.isEmpty()) return keysList

      table.forEach(item => keysList.push(item.key))

      return keysList
    }

    values() {
      let valuesList = []
      if (this.isEmpty()) return valuesList

      table.forEach(item => valuesList.push(item.value))

      return valuesList
    }

    toString() {
      let content = ''
      table.forEach(item => {
        const comma = Utils.addComma(content)
        content += `${comma}${item.toString()}`
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

myHashTable.put('hello', 'world')
myHashTable.put('other item', 'other value')
myHashTable.put('different item', 'different value')

console.log(myHashTable.toString())
myHashTable.remove('other item')

console.log(myHashTable.toString())
console.log(myHashTable.has('different item'))
