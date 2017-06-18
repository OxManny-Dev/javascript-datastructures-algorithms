var BST = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var bst = new BST(50);

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
}


// var bst2 = new BST(100);

bst.insert(100);
bst.insert(90);
bst.insert(50);
bst.insert(40);

console.log(bst);
console.log(bst.contains(901));
