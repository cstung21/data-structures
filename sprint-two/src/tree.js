var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTreeNode = new Tree(value);
  this.children.push(newTreeNode);
};

treeMethods.contains = function(target) {
  var found = false;
  var searchTree = function(tree) {
    if (tree.children.length > 0) {
      for(var i = 0; i < tree.children.length; i++) {
        if (tree.children[i].value === target) {
          found = true;
        } else {
          searchTree(tree.children[i]);
        }
      }
    }
  }
  searchTree(this);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant,
 contains: linear
 */
