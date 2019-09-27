/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var i = 0;

var reverseString = function(s) {
    return reversal(s, 0, s.length-1);  
};

var reversal = function(s, front, back) {
    let first = s[front];
    let last = s[back];
    if (front > back) {
        return s;
    }
    else {
        s[front] = last;
        s[back] = first;
        return reversal(s, front+1, back-1);
    }
}