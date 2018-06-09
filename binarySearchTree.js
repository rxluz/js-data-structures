function BST(value) {
  this.left = null;
  this.right = null;
  this.value = value;
}

BST.prototype.insert = function(value) {
  if (value == this.value) return;
  if (value < this.value) {
    if (this.left) this.left.insert(value);
    else this.left = new BST(value);
    return;
  }

  if (this.right) this.right.insert(value);
  else this.right = new BST(value);
};

BST.prototype.contains = function(value) {
  if (this.value == value) return true;

  if (value < this.value) {
    return !this.left ? false : this.left.contains(value);
  }

  return !this.right ? false : this.right.contains(value);
};

BST.prototype.depthFirstTraversal = function(interatorFunc, order) {
  if (order == "pre-order") interatorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(interatorFunc, order);
  if (order == "in-order") interatorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(interatorFunc, order);
  if (order == "post-order") interatorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function(interatorFunc) {
  var queue = [this];
  while (queue.length) {
    var treeNode = queue.shift();
    interatorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};

BST.prototype.getMin = function() {
  return !this.left ? this.value : this.left.getMin();
};

BST.prototype.getMax = function() {
  return !this.right ? this.value : this.right.getMax();
};

var bb = new BST(48);

bb.insert(48);
bb.insert(11);
bb.insert(49);
bb.insert(47);
bb.insert(97);
bb.insert(51);
bb.insert(52);
bb.insert(23);
bb.insert(53);

// console.log(bb.breadthFirstTraversal(({ value }) => console.log(value)));
console.log(bb.getMax());
console.log(bb.getMin());
