function flipInt(n){
    var digit, result = 0;

    while( n ){
        digit = n % 10;                 // get last digit. 123/10 -> 12.3 -> 3
        result = (result * 10) + digit; // 123 -> 1230 + 4 => 1234
        n = n/10|0;                     // remove last digit. 123 -> 12.3 -> 12
        console.log('N: ' + n)
    }  
  
    return result;
}

console.log(flipInt(876));