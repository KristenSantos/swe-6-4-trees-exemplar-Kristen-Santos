// A binary tree implementation using nodes and references
class BinaryTree {
  // Initializes a new binary tree node with a given value
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Retrieves the value stored at the root of this node
  getRootValue() {
    return this.value;
  }

  // Updates the value stored at the root of this node
  setRootValue(value) {
    this.value = value;
  }

  // Inserts a new node as the left child and returns the new node
  insertLeft(value) {
    const newNode = new BinaryTree(value);
    this.left = newNode;
    return newNode;
  }

  // Inserts a new node as the right child and returns the new node
  insertRight(value) {
    const newNode = new BinaryTree(value);
    this.right = newNode;
    return newNode;
  }

  // Retrieves the value of the left child if it exists
  getLeftChildValue() {
    return this.left ? this.left.getRootValue() : undefined;
  }

  // Retrieves the value of the right child if it exists
  getRightChildValue() {
    return this.right ? this.right.getRootValue() : undefined;
  }
}

// Determines if all nodes in a binary tree have the same value
const isUnivalueTree = (root) => {
  // An empty tree is considered univalued
  if (!root) return true;
  // Value to compare against
  const targetValue = root.getRootValue();

  const dfs = (node) => {
    // Base case: null nodes are always univalued
    if (!node) return true;
    // Mismatch found
    if (node.getRootValue() !== targetValue) return false;
    // Recursively check children
    return dfs(node.left) && dfs(node.right);
  };

  return dfs(root);
};

// Inverts a binary tree by swapping left and right children at each level
const invert = (root) => {
  // Base case: return if tree is empty or a leaf node
  if (!root) return root;
  // Swap left and right
  [root.left, root.right] = [root.right, root.left];
  // Recursively invert left subtree
  if (root.left) invert(root.left);
  // Recursively invert right subtree
  if (root.right) invert(root.right);
  // Return the root of the inverted tree
  return root;
};

// Finds the second minimum value in a special binary tree
const secondMinimumNode = (root) => {
  // No second min if only one node
  if (!root || (!root.left && !root.right)) return -1;
  // The minimum value in the tree
  const minValue = root.getRootValue();
  let secondMin = Infinity;
  let foundSecondMin = false;

  const findSecondMin = (node) => {
    if (!node) return;
    if (node.getRootValue() > minValue && node.getRootValue() < secondMin) {
      secondMin = node.getRootValue();
      foundSecondMin = true;
    } else if (node.getRootValue() === minValue) {
      findSecondMin(node.left);
      findSecondMin(node.right);
    }
  };

  findSecondMin(root);
  return foundSecondMin ? secondMin : -1;
};

module.exports = { BinaryTree, isUnivalueTree, invert, secondMinimumNode };
