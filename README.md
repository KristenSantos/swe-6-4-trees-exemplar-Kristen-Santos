# Assignment

In this assignment, you will be implementing a `BinaryTree` class and then writing a few classic interview problems related to trees. Try to solve them all recursively!

The final problem is a challenge problem and is optional.

- [Setup](#setup)
- [Testing Your Code](#testing-your-code)
  - [npm test](#npm-test)
  - [How To Read Tests](#how-to-read-tests)
  - [Submitting On Time](#submitting-on-time)
  - [playground.js](#playgroundjs)
- [Tasks](#tasks)
  - [1. Implement a Binary Tree](#1-implement-a-binary-tree)
  - [2. Univalued Binary Tree](#2-univalued-binary-tree)
  - [3. Invert a Binary Tree](#3-invert-a-binary-tree)
  - [4. Challenge Problem: Second Minimum Node](#4-challenge-problem-second-minimum-node)

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/fullstack-curriculum/how-tos/working-with-assignments#how-to-work-on-assignments).

After cloning your repository, make sure to run the following commands:

```sh
npm i
git checkout -b draft
npm t
```

## Testing Your Code

### npm test

Before submitting your code, make sure you got things right by running the provided automated tests.

You can do this using the commands:

```sh
npm test # run the automated tests
npm run test:w # run the automated tests and rerun them each time you save a change
```

You will know that you have "completed" an assignment once you have passed 75% or more of the automated tests!

### How To Read Tests

All tests are made up of `expect()` statements that must all be true in order for the test to pass.

Remember, when reading tests ask yourself:
* How is the test using my code? What inputs are being provided to my functions?
* What is the test expecting my function to return?
* Is the test expecting my function to produce any side effects (printing something to the console, modifying the passed-in array, etc...)?

### Submitting On Time

You have to understand that "grades" don't exist at Marcy. We only need performance data in order to know how you're doing, and make sure the people who need help get it as quickly as they can. It's ok if you didn't finish by the deadline! Just show us what you have. We'll have office hours and reviews, and we want to know what you are all struggling with so we can use those meetings effectively. **This is not about grades, its about seeing what you know, and where we can help!**

### playground.js

The most straightforward way to test your code is to test your code by hand as you work. Invoke your functions and use `console.log()` to print out the results. Then, `cd` into the `src/` directory and use the `node <file_name>` command to run your JavaScript files. 

You can also create what's called a "playground" (or "sandbox") file where you import any code you need, and then mess around with that file. We've included one in the `src` directory so you can see it. Run that program using `node src/playground.js`.

## Tasks

### 1. Implement a Binary Tree

Implement a binary tree class using nodes and references. Instances should have the following methods available to them:
   - `getRootValue`
   - `setRootValue`
   - `insertLeft`
   - `insertRight`
   - `getLeftChildValue`
   - `getRightChildValue`

### 2. Univalued Binary Tree

A binary tree is univalued if every node in the tree has the same value. Write a function `isUnivalTree`, that takes a Tree as a parameter and returns true if and only if the given tree is univalued.

### 3. Invert a Binary Tree

Invert a binary tree.

    Input:
      ```
           4
         /   \
        2     7
       / \   / \
      1   3 6   9
      ```

      Output:
      ```

           4
         /   \
        7     2
       / \   / \
      9   6 3   1
      ```

**Trivia:**
This problem was inspired by this original tweet by Max Howell:

> Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

### 4. Challenge Problem: Second Minimum Node

Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property `root.val = min(root.left.val, root.right.val)` always holds.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output `-1` instead.

  Example 1:
  ```
  Input:
       2
      / \
     2   5
        / \
       5   7
  ```

  Output: 5
  Explanation: The smallest value is 2, the second smallest value is 5.


  Example 2:
  ```
  Input:
       2
      / \
     2   2
  ```
  Output: -1
  Explanation: The smallest value is 2, but there isn't any second smallest value.
  
  Example 3:
  ```
  Input:
        2
      /   \
     2     2
    / \   / \
   2   3 2   4 
  ```
  Output: 3
  Explanation: The smallest value is 2, the second smallest value is 3.
