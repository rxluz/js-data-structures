function BST() {
  let root = null

  class Utils {
    static node(key) {
      return {
        key,
        left: null,
        right: null,
      }
    }

    static insertNode(root, node) {
      if (root && root.key === node.key) return false

      if (root.key > node.key) {
        if (root.left !== null) return Utils.insertNode(root.left, node)

        root.left = node

        return true
      } else {
        if (root.right !== null) return Utils.insertNode(root.right, node)

        root.right = node
        return true
      }
    }

    static searchNodeByKey(root, key, rootBefore = null) {
      if (!root) return { node: null, nodeBefore: null }
      if (root.key === key) return { nodeBefore: rootBefore, node: root }

      if (root.key > key) return Utils.searchNodeByKey(root.left, key, root)
      else return Utils.searchNodeByKey(root.right, key, root)
    }

    static visitInPreOrderTraversal(root, callback) {
      if (root === null) return false

      callback(root)
      Utils.visitInPreOrderTraversal(root.left, callback)
      Utils.visitInPreOrderTraversal(root.right, callback)
    }

    static visitInOrderTraversal(root, callback) {
      if (root === null) return false

      Utils.visitInOrderTraversal(root.left, callback)
      callback(root)
      Utils.visitInOrderTraversal(root.right, callback)
    }

    static visitInPostOrderTraversal(root, callback) {
      if (root === null) return false

      Utils.visitInPostOrderTraversal(root.left, callback)
      Utils.visitInPostOrderTraversal(root.right, callback)
      callback(root)
    }

    static getMinValue(root) {
      if (root.left === null) return root.key
      return Utils.getMinValue(root.left)
    }

    static getMaxValue(root) {
      if (root.right === null) return root.key
      return Utils.getMaxValue(root.right)
    }

    static removeNode(root, key) {
      // receive a node and checks if is empty, case is empty returns null and stop the function
      if (root === null) return null
      // checks if this is the node that we're looking for, if isn't redefines the left size with a new removeNode call (case the key is smaller than the current node)
      // or redefined the right with a new remove call
      if (root.key !== key) {
        if (root.key > key) {
          root.left = Utils.removeNode(root.left, key)
        } else {
          root.right = Utils.removeNode(root.right, key)
        }

        return root
      }

      // in this point we know that this is the node that you're lookin for, so we could check what type of node is
      // if is a leaf node, we simply return null
      const isALeafNode = root.left === null && root.right === null

      if (isALeafNode) {
        return null
      }

      // if is a node with two child, we found the minimum value in right side and replace the current node value, after we call this function to remove the value from right side
      const isANodeWithTwoChildren = root.left !== null && root.right !== null

      if (isANodeWithTwoChildren) {
        const minimumValueInRight = Utils.getMinValue(root.right)
        root.key = minimumValueInRight
        root.right = Utils.removeNode(root.right, minimumValueInRight)
      } else {
        // if is a node with one child, we replace the current key by the child key and we call this function again to remove the number from the child
        if (root.left !== null) {
          root.key = root.left.key
          root.left = Utils.removeNode(root.left, root.key)
        } else {
          root.key = root.right.key
          root.right = Utils.removeNode(root.right, root.key)
        }
      }

      // in the end we return the changed root
      return root
    }
  }

  class PublicBST {
    insert(key) {
      const node = Utils.node(key)

      if (root === null) {
        root = node
        return true
      }

      return Utils.insertNode(root, node)
    }

    has(key) {
      return Utils.searchNodeByKey(root, key).node !== null
    }

    remove(key) {
      root = Utils.removeNode(root, key)
    }

    inOrderTraversal(callback) {
      return Utils.visitInOrderTraversal(root, callback)
    }

    inPreOrderTraversal(callback) {
      return Utils.visitInPreOrderTraversal(root, callback)
    }

    inPostOrderTraversal(callback) {
      return Utils.visitInPostOrderTraversal(root, callback)
    }

    min() {
      return Utils.getMinValue(root)
    }

    max() {
      return Utils.getMaxValue(root)
    }

    tempPrint() {
      return JSON.stringify(root)
    }
  }

  return new PublicBST()
}

const myBST = new BST()

;[10, 15, 10, 15, 12, 9, 12, 9, 14, 26, 5, 28].forEach(item =>
  myBST.insert(item),
)

console.log(myBST.remove(15))
console.log(myBST.tempPrint())
