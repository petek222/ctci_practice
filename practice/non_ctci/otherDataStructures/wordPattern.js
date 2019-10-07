/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    
    let patternMap = new Map();
    let trackingSet = new Set();
    
    // Generate arrays for our inputs
    let patternArray = pattern.split('');
    let stringArray = str.split(' ');
    
    if (patternArray.length != stringArray.length) {
        return false;
    }
    
    // If they have the same length, we want to populate our hashmap
    for (let i = 0; i < patternArray.length; i++) {
        if (!patternMap.get(patternArray[i]) && !trackingSet.has(stringArray[i])) {
            patternMap.set(patternArray[i], stringArray[i]);
            trackingSet.add(stringArray[i]);
        }
    }
    
    // Now that we've built up our hashmap, we can do our check
    for (let i = 0; i < patternArray.length; i++) {
        if (patternMap.get(patternArray[i]) != stringArray[i]) {
            return false;
        }
    }
    
    // If we made it here, return true
    return true;
};

// Example
// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
//
// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false