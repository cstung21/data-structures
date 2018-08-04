var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var tailNode = new Node(value);
    if (this.tail) {
      this.tail.next = tailNode;
    }
    this.tail = tailNode;
    if (!this.head) {
      this.head = tailNode;
    }
  };

  list.removeHead = function() {
    var newHead = this.head.next;
    var oldHead = this.head.value;
    this.head = newHead;
    return oldHead;
  };

  list.contains = function(target) {
    var result = false;
    for (var node in list) {
      if (list[node].value === target) {
        result = true
      }
    }
    return result;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: constant, 
 removeHead: constant,
 contains: linear
 */
