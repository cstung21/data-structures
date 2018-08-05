

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var bucket = this._storage[index];
  // if (!bucket) {
  //   this._storage.set(bucket[0], [[k, v]]);
  // } else {
  //   for (var i = 0; i < bucket.length; i++) {
  //     if (       === k) {
        
  //     }
      
  //   }
  //   var bucketLength = bucket.length;
  //   this._storage.set(bucket[bucketLength], [k, v]);
  //   console.log(this);
  // }
  // console.log(this._storage.get(index));
  if (this._storage.get(index)) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      // console.log(this._storage.get(index)[i][0]);
      if (this._storage.get(index)[i][0] === k) {
        this._storage.set(this._storage.get(index)[i][1], v);
      } else {
        this._storage.set(index[this._storage.get(index).length], [k, v]);
      }
    }
  } else {
    this._storage.set(this._storage.get(index), [[k, v]]);
  } 

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      result = k;
      return result;
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


