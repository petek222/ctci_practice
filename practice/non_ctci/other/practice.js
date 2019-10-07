// /**
//  * @param {number} N
//  * @return {number}
//  */
// var bitwiseComplement = function(N) {
    
//     let origBinary = toBinary(N);

//     console.log('origBinary ' + origBinary);
//     let newBinary = ''
    
//     for (let i = 0; i < origBinary.length; i++) {
        
//         if (origBinary[i] == '0') {
//             newBinary = newBinary + '1';
//         }
        
//         else {
//             newBinary = newBinary + '0';
//         }
//     }
    
//     // maybe don't parseInt
//     let complementString = fromBinary(newBinary);    

//     return (parseInt(complementString));
    
// };

// var toBinary = function(number) {
    
//     return (number >>> 0).toString(2);
    
// }

// var fromBinary = function(binary) {
    
//     console.log(binary);
//     var decimal = 0;
    
//     var size = binary.length-1;
    
//     for (var i = 0; i < binary.length; i++) {
        
//         decimal = decimal + (binary[i] * (Math.pow(2, size)));
//         size--;
//     }

//     return(decimal);
// }

// var x = 10;

// console.log(bitwiseComplement(x));



var climbStairs = function(n) {
    
    if (n == 0 || n ==1) {
        return 1;
    }
    
    return climbStairs(n-1) + climbStairs(n-2);
    
};

console.log(climbStairs(45));