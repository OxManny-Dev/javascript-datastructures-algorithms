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


var ll = new LinkedList();

ll.addToHead(200);
ll.addToHead(100);
ll.addToTail(300);

console.log(ll);
