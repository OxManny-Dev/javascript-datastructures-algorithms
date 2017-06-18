var LinkedList = function(){
  this.head = null;
  this.tail = null;
};


var Node = function(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
};


LinkedList.prototype.addToHead = function(value){
  // create the new node. Set its next value to the current head
  // If its the first node, this.head will be null
  var newNode = new Node(value, this.head, null);
  if (this.head){
    // set the current head as the next
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
};


LinkedList.prototype.addToTail = function(value){
  // create a new Node with its next set to null and previous set to the tail
  var newNode = new Node(value, null, this.tail);
  // Check if tail already exist
  if (this.tail) {
    // Set the current tails next property to the new node
    this.tail.next = newNode
  } else {
    // if tails doesnt exist, set the head as the new node
    this.head = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function(){
  // first check if there's a head
  if (!this.head){
    return null;
  }
  // get the value of current head
  var value = this.head.value;
  // Set the head to the current heads next value
  // If this is the only node in the list, this.head will be null
  this.head = this.head.next;
  if (this.head) {
  // If there's a head, set its previous value to null
    this.head.prev = null;
  } else {
    // Otherwise the list is empty so set the tail to null
    this.tail = null;
  }
  // Return deleted nodes value
  return value;
};

LinkedList.prototype.removeTail = function(){
  if(!this.tail) {
    return null;
  }
  // Get the current value of the current tail.
  var value = this.tail.value;
  // Set the tail to the current tails previous value.
  // If this is the only item in the list, this.tail will be null
  this.tail = this.tail.prev;
  if (this.tail){
    // if there is a tail then set the tails next value to null
    this.tail.next = null;
  } else {
    // Otherwise the list is empty so set the head to null
    this.head = null;
  }
  // return deleted nodes value
  return value;
}

LinkedList.prototype.search = function(searchValue) {
  // Set the currentNode to the head
  var currentNode = this.head;
  // Loop through each node
  while (currentNode) {
    // if the current nodes value is equal to search value
    if(currentNode.value  === searchValue) {
      // return the current nodes value
      return currentNode.value;
    }
    // set the currentNode to the next node to loop to the next
    currentNode = currentNode.next;
  }
  // return null if nothing no value is found or is there's no more nodes
  return null;
};


LinkedList.prototype.indexOf = function(searchValue) {
  // Set an array to save the indexes
  var indexes = [];
  // Set the current node to the head
  var currentNode = this.head
  // create a variable for keeping track of index
  var currentIndex = 0;
  // loop through each node until the next value is null
  while (currentNode) {
    if(currentNode.value === searchValue) {
      // push the current index to array if the current nodes value is equal to the searh value
      indexes.push(currentIndex);
    }
    // add 1 to index
    currentIndex++
    // Set the current node to the next node for looping
    currentNode = currentNode.next;
  }
  // return the array
  return indexes;
}

var ll = new LinkedList();

ll.addToHead(100);
ll.addToTail(200);
ll.addToTail(300);
ll.addToTail(200);
ll.addToTail(300);
ll.addToTail(200);
ll.addToTail(300);
ll.addToHead(100);
ll.addToTail(200);


console.log(ll.indexOf(200));
