/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param (Array) stack1, stackTwo
 * @return (element)
 */

 var stackMatch = function(stack1, stack2) {
     // Here we can just go through one stack and put everything into a set
     // Then we go through the other stack and check if the current element is in the set
     //
     // If it is, return it
     // If we make it through the whole second stack with no matches, return null or -1 or something
 };

 var check = (value) => {

    let val = value % 10;
    value = Math.floor(value/10);
    console.log(val);
    val = value % 10;
    value = Math.floor(value/10);
    console.log(val);
    val = value % 10;
    console.log(val);
 }

 check(123);