// File to practice questions from CTCI, Chapter 1

// 1. isUnique 
// function isUnique(string) {

//     for (var i = 0; i < string.length; i++) {

//         var cur = string[i];

//         for (var j = 0; j < string.length; j++) {

//             if (string[j] == cur && j != i) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// var check = isUnique('pete');
// console.log(check);

// ************************************************************************************

// 2. checkPermutation 
//
// NOTE: THIS IS OVERWROUGHT: WE CAN JUST SORT THE STRINGS,
// THEN COMPARE FOR EQUALITY (FIND JS SORT FUNCTION)
//
// ARRAY.FROM()
//
// function checkPermutation(stringOne, stringTwo) {

//     if (stringOne.length != stringTwo.length) {
//         return false;
//     }

//     for (var i = 0; i < stringOne.length; i++) {

//         var character = stringOne[i];

//         console.log(stringTwo);

//         if (stringTwo.includes(character)) {
//             stringOne = checkMult(stringOne, character);
//             stringTwo = checkMult(stringTwo, character);
//         }

//         else {
//             return false;
//         }
        
//     }

//     return true;
// }


// function checkMult(stringTwo, character) {

//     for (var i = 0; i < stringTwo.length; i++) {

//         if (stringTwo[i] == character) {
//             stringTwo = stringTwo.substring(0, i-1) + stringTwo.substring(i+1, stringTwo.length);
//         }
//     }
//     return stringTwo;
// }

// var test = 'dog';
// var other = 'cat';
// console.log(checkPermutation(test, other));

// ************************************************************************************

// 3. URLify
// function URLify(url) {

//     let urlArray = Array.from(url);

//     for (var i = 0; i < url.length; i++) {

//         if (urlArray[i] == ' ') {
//             urlArray[i] = '%20';
//         }
//     }

//     let newString = '';

//     for (var i = 0; i < url.length; i++) {
//         newString = newString + urlArray[i];
//     }
    
//     return newString;
// }

// let test = "Mr John Smith ";
// console.log(URLify(test));


// 4. Palindrome Permutation (skip, come back later)

// ************************************************************************************

// 5. One Away
// WORK ON THIS: CLOSE
// function oneAway(mainString, opString) {

//     // This conditional can probably be streamlined
//     if (mainString.length - 1 != opString.length && mainString.length + 1 != opString.length && mainString.length != opString.length) {
//         return false;
//     }

//     if (mainString == opString) {
//         return true;
//     }

//     // Part to check for deletion
//     for (var i = 0; i < mainString.length; i++) {
        
        
//         var checkDelete = mainString.substring(0, i) + mainString.substring(i+1, mainString.length);

//         if (checkDelete == opString) {
//             return true;
//         }
//     }

//     // Replacement portion
//     // This won't work for edge cases with multiple 
//     // letter occurrences and one is changed
//     for (var i = 0; i < opString.length; i++) {

//         var checkReplacementCharacter = opString[i];
//         var checkString = mainString;

//         if ((checkString[i] != checkReplacementCharacter)) {
            
//             checkString = replaceAt(checkString, i, checkReplacementCharacter);

//             if (checkString == opString) {
//                 return true;
//             }
//         }
//     }

//     // Insertion portion
//     for (var i = 0; i < opString.length; i++) {

//         var checkInsertCharacter = opString[i];
//         var iString = mainString;

//         if (!(iString[i] != checkInsertCharacter) || iString[i] == undefined) {

//             let newString = iString.substring(0, i-1) + checkInsertCharacter + iString.substring(i+1, opString.length);

//             if (newString == opString) {
//                 return true;
//             }
//         }
//     }

//     // if all the above checks don't work
//     return false;
// }

// function replaceAt (string, index, replacement) {

//     if (index == 0) {
//         return (replacement + string.substr(index+1, string.length));
//     }
//     else {
//     return string.substr(0, index) + replacement+ string.substr(index + replacement.length);
//     }
// }

// let stringOne = 'pale';
// let stringTwo = 'pales';

// console.log(oneAway(stringOne, stringTwo));

