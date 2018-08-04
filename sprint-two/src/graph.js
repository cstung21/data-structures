

// Instantiate a new graph
var Graph = function() {
  this.totalNodes = 0;
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {value: node};
  this.storage[node] = newNode;
  this.totalNodes++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var found = false;
  for (var key in this.storage) {
    if (this.storage[key].value === node) {
      found = true;
    }
  }
  return found;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) { 
    if (this.storage[node].edge) {
      for (var i = 0; i < this.storage[node].edge.length; i++) {
        if (this.hasEdge(node, this.storage[node].edge[i])) {
          this.removeEdge(node, this.storage[node].edge[i]);
      }
    } 
  }
  delete this.storage[node];
  this.totalNodes--;
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return ((this.storage[fromNode].edge.includes(toNode)) && (this.storage[toNode].edge.includes(fromNode)));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edge ? this.storage[fromNode].edge.push(toNode) : this.storage[fromNode].edge = [toNode];
  this.storage[toNode].edge ? this.storage[toNode].edge.push(fromNode) : this.storage[toNode].edge = [fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeEdgeIndex = this.storage[fromNode].edge.indexOf(toNode);
  var toNodeEdgeIndex = this.storage[toNode].edge.indexOf(fromNode);
  if (fromNodeEdgeIndex >= 0) {
    this.storage[fromNode].edge.splice(fromNodeEdgeIndex, 1);
  }
  if (toNodeEdgeIndex >= 0) {
    this.storage[toNode].edge.splice(toNodeEdgeIndex, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(this.storage[key].value)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 *addNode: constant
 *contains: linear
 *removeNode: linear
 *hasEdge: linear
 *addEdge: constant
 *removeEdge: linear
 *forEachNode: linear
 *
 */
 
 
 


