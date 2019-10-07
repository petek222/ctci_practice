/**
 * @param {string} s
 * @return {boolean}
 */

 // Tells whether an input string of parentheses is valid
var isValid = function(s) {
    let openStack = new Array();
    for (let i = 0; i < s.length; i++) {
        if (isOpen(s[i])) {
            openStack.push(s[i]);
        }
        else {
            let curOpen = openStack.pop();
            if (!compare(curOpen, s[i])) {
                return false;
            }
        }
    }
    return (openStack.length == 0);
};
var compare = (open, closed) => {
    return ((open == '(' && closed == ')') || (open == '{' && closed == '}') || open == '[' && closed == ']');
}
var isOpen = (string) => {
    return (string == '(' || string == '{' || string == '[');
}