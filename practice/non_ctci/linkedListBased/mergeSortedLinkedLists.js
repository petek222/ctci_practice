/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// Outer Loop Function that processes for each pair
// Makes use of priority queue data structure
var mergeKLists = function(lists) {
    
    if (lists.length == 0) {
        return null;
    }
    while (lists.length > 1) {
        let listOne = lists.shift(); // removes first element
        let listTwo = lists.shift(); // removes second element
        let mergedList = mergeLists(listOne, listTwo);
        lists.push(mergedList);
    }
    return lists[0]; // Once we are down to one merged element, return it
};

// Helper function to merge two paramter lists into one
//
// This code by itself can merge two sorted lists into one list
var mergeLists = (listOne, listTwo) => {
    
    let dummy = new ListNode(0);
    let temp = dummy;
    
    // List does the main merging of the two passed Linked Lists
    while (listOne !== null && listTwo !== null) {
        if (listOne.val < listTwo.val) {
            temp.next = listOne;
            listOne = listOne.next;
        }
        else {
            temp.next = listTwo;
            listTwo = listTwo.next;
        }
        temp = temp.next
    }
        
    // Remaining checks are if the loop above performed no traversals
    if (listOne !== null) {
        temp.next = listOne;
    }
    if (listTwo !== null) {
        temp.next = listTwo;
    }
    
    return dummy.next; // Must return next so the 0 value node is ignored
}