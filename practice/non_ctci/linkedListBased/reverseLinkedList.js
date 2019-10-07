// 1. Iterative approach
//
// reverse a linked list  
var reverseLinkedList = function(linkedlist) {
    var node = linkedlist;
    var previous = null;
  
    while(node) {
      // save next or you lose it!!!
      var save = node.next;
      // reverse pointer
      node.next = previous;
      // increment previous to current node
      previous = node;
      // increment node to next node or null at end of list
      node = save;
    }
    return previous;   // Change the list head !!!
  }

  // Driver code
  linkedlist = reverseLinkedList(linkedlist);


  // *******************************************************

// 2. Recurisve approach
//
// reverse a linked list
const reverseLinkedList = (head) => {
    if (!head || !head.next) {
      return head;
    }
    let temp = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = undefined;
    return temp;
  }    
