var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //if bucket exists
    //if tuple with same k value exists
      //update that tuple's v with current v
    //else 
      //add [k,v] to bucket
  //else 
    //create bucket and add [k,v] as first tuple      
  if (bucket) {
    var tupleKeys = [];
    for (var i = 0; i < bucket.length; i++) {
      tupleKeys.push(bucket[i][0]);
    }
    if (tupleKeys.includes(k)) {
      bucket.splice(tupleKeys.indexOf(k), 1, [k, v]);
      this._storage.set(index, bucket);
    } else {
      bucket.push([k, v]);
      this._storage.set(index, bucket);
    }
  } else {
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
    return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._storage.set(index, bucket);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
With a good hash function that avoids collisions, the time complexity for the above functions would be constant.
However, with a bad hash function that produced many collisions, in the worst case scenario, the above functions would have linear time complexities.
 */
