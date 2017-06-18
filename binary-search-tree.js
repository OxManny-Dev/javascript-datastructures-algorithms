var BST = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


BST.prototype.insert = function(value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new BST(value);
    } else {
      this.left.insert(value )
    }
  } else if (value > this.value){
    if (!this.right) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  }
};


BST.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value)
    }
  } else if (value > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order){
  if(order === "pre-order"){
    iteratorFunc(this.value);
  }
  if(this.left) {
    this.left.depthFirstSearch(iteratorFunc, order);
  }
  if(order === "in-order"){
    iteratorFunc(this.value);
  }
  if(this.right){
    this.right.depthFirstSearch(iteratorFunc, order);
  }
  if (order === "post-order"){
    iteratorFunc(this.value);
  }
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  var queue = [this];
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if(treeNode.left) {
      queue.push(treeNode.left);
    }
    if(treeNode.right) {
      queue.push(treeNode.right);
    }
  }
};

BST.prototype.getMinVal = function() {
  if (this.left) {
    this.left.getMinVal();
  } else {
    return this.left.value;
  }
};

BST.prototype.getMaxVal = function() {
  if (this.right) {
    this.right.getMaxVal();
  } else {
    return this.right.value;
  }
};

var bst = new BST(50);

bst.insert(100);
bst.insert(90);
bst.insert(50);
bst.insert(40);
bst.insert(21);
bst.insert(47);
bst.insert(11);

console.log(bst);

// console.log(bst.depthFirstTraversal(console.log, "post-order"));
