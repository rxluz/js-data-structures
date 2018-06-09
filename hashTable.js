class HashTable {
  constructor(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(key) {
    const total = key
      .split("")
      .reduce((acum, value, index) => (acum += key.charCodeAt(index)), 0);

    return total % this.numBuckets;
  }

  insert(key, value) {
    const index = this.hash(key);
    const hashNode = new HashNode(key, value, null);

    if (!this.buckets[index]) {
      this.buckets[index] = hashNode;
    } else if (this.buckets[index].key === key) {
      this.buckets[index].value = value;
    } else {
      var currentNode = this.buckets[index];

      while (currentNode.next) {
        currentNode = currentNode.next;
        if (currentNode.key === key) {
          currentNode.value = value;
          return;
        }
      }

      currentNode.next = hashNode;
    }

    return this.buckets;
  }

  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) return null;

    var currentNode = this.buckets[index];

    while (currentNode) {
      if (currentNode.key === key) return currentNode;

      currentNode = currentNode.next;
    }

    return null;
  }

  retrieveAll() {
    return this.buckets.reduce((acum, node) => {
      var currentNode = node;
      while (currentNode) {
        acum.push(currentNode);
        currentNode = currentNode.next;
      }

      return acum;
    }, []);
  }
}

class HashNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
}

var myHT = new HashTable(30);

// console.log(myHT);
myHT.insert("Becacs", "hello");
myHT.insert("Beaccs", "hello");
myHT.insert("Beacsc", "hello");
myHT.insert("joana", "hello");
myHT.insert("almagh", "hello");
// myHT.insert("Becacs", "hello1");
// myHT.insert("Beccas", "hey");
console.log(myHT.retrieveAll());
// console.log("heelo".charCodeAt(1));
