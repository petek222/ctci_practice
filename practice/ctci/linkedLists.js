var LinkedList = require('../basics/linkedList');

// 2.1: Remove Dups

// function removeDups(list) {

//     let cur = list.head; 

//     while (cur) {

//         let data = cur.data;

//         for (var i = cur.next; i != null; i = i.next) {

//             if (data == i.data) {
//                 cur.next = i.next; 
//             }
//         }
//         cur = cur.next;
//     }

//     return list;
// }

// let me = new LinkedList();

// me.append(8);
// me.append(7);
// me.append(7);
// me.append(4);
// me.append(7);
// me.append(9);


// let x = removeDups(me);

// x.print();

// ************************************************************************************

// 2.2: Return Kth to Last
// function kToLast(list, k) {

//     let size = list.size;

//     let index = size-k+1;
//     let count = 0;
//     let i;

//     for (i = list.head; count < index-1; i = i.next) {
//         count++;
//     }

//     return (i.data);
// }

// let me = new LinkedList();

// me.append(1);
// me.append(7);
// me.append(5);
// me.append(4);
// me.append(8);
// me.append(9);

// console.log(kToLast(me, 2));

// ************************************************************************************

// 2.3: Delete Middle Node
