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

LinkedList.prototype.removeFromHead = function(){
  // first check if there's a head
  if (!this.head){
    return null;
  }
  // get the value of current head
  var value = this.head.value;
  // set the head to the current heads next value
  this.head = this.head.next;
  if(this.head) {
    this.head.prev = null;
  } else {
    // if the list is empty, set the tail to null
    this.tail = null;
  }
  return value;
};



var ll = new LinkedList();

ll.addToHead(100);
// ll.addToTail(200);
// ll.addToTail(300);
// ll.removeFromHead();

console.log(ll);
