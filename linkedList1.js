function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);

  if (this.head) this.head.prev = newNode;
  if (!this.tail) this.tail = newNode;

  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);

  if (this.tail) this.tail.next = newNode;
  if (!this.head) this.head = newNode;

  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  //se nao tiver cabeca simplesmente retorna null
  if (!this.head) return null;

  //salva a cabeca atual para poder retornar depois
  var oldHeaderVal = this.head.value;

  //define que a nova cabeca sera o valor next da atual cabeca (que pode ser null)
  this.head = this.head.next;

  //caso nao seja null define que atual cabeca nao tem valor anterior
  if (this.head) this.head.prev = null;
  //caso a cabeca seja null a calda tb tem que ser null
  else this.tail = null;

  //retorna o valor removido
  return oldHeaderVal;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;

  var oldTailValue = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) this.tail.next = null;
  else this.head = null;

  return oldTailValue;
};

LinkedList.prototype.search = function(valueToSearch) {
  if (!this.head) return null;

  var currentItem = this.head;

  while (currentItem) {
    if (currentItem.value == valueToSearch) return currentItem.value;

    currentItem = currentItem.next;
  }

  return null;
};

LinkedList.prototype.indexOf = function(valueToCheck) {
  var indexes = [];

  var currentItem = this.head;
  var currentIndex = 0;

  while (currentItem) {
    if (currentItem.value == valueToCheck) indexes.push(currentIndex);
    currentItem = currentItem.next;
    currentIndex++;
  }

  return indexes;
};

var ll = new LinkedList();

["a", "b", "c", "d", "e", "f", "g", "a", "b", "c", "a", "c"].forEach(v =>
  ll.addToHead(v),
);
console.log(ll);

["a", "b", "c", "d", "e", "f", "g", "h"].forEach(v =>
  console.log(ll.indexOf(v)),
);
