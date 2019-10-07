/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = (head) => {

    // If the list is empty, simply return null
    if(!head) {
        return null;
      }

    // If there is a list, create a Map
    // This map stores key-value pairs for the new linked list
    // key = node, value = node.val
    const clones = new Map();
    let n = head;
      while(n) {
        clones.set(n, new Node(n.val));
        n = n.next
      }

    // After creating our map, lets put our node variable 'n' back at the head of our list
    n = head;

    // While there is a node in our original list (ie. not null), enter the loop
    while(n) {

        // In the loop

        // Set the current node's 'next' field to the next node, or null if there is no 'next' field (ie. end of the list)
        clones.get(n).next = clones.get(n.next) || null;

        // Set the current node's 'random' field to...
        clones.get(n).random = clones.get(n.random) || null;
        n = n.next
      }
      return clones.get(head);
};