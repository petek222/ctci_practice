function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // if char was used already, skip it
        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) {
            // nothing to do           
        } 

        else {
            var remainingString = string.slice(0,i) + string.slice(i+1,string.length); 
            let subPermutations = permut(remainingString);
    
            for (let i = 0; i < subPermutations.length; i++) {
                permutations.push(char + subPermutations[i]);
            }
        }
    }
    return permutations;
}


// Driver code 
var myString = "pet";
permutations = permut(myString); // 'permutations' is an array object 
for (permutation of permutations)
    console.log(permutation) //Use the output method of your choice