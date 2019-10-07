// Input:  [12 11 -13 -5 6 -7 5 -3 -6]
// Output: [-13, -5, -7, -3, -6] And [12, 11, 6, 5]


let divideArray = (array) => {

    let negativeStack = new Array();
    let positiveStack = new Array();

    for (let i = 0; i < array.length; i++) {

        if (array[i] >= 0) {
            positiveStack.push(array[i]);
        }
        else {
            negativeStack.push(array[i]);
        }
    }

    let negativeArray = new Array();
    let positiveArray = new Array();

    let nLength = negativeStack.length;
    let pLength = positiveStack.length;

    // Now lets fill up our arrays
    for (let j = 0; j < nLength; j++) {
        let cur = negativeStack.shift(j);
        negativeArray.push(cur);
    }

    for (let k = 0; k < pLength; k++) {
        let cur = positiveStack.shift(k);
        positiveArray.push(cur);
    }

    console.log('Negative Array: ' + negativeArray);
    console.log('Positive Array: ' + positiveArray);

}

let myArray = [12, 11, -13, -5, 6, -7, 5, -3, -6];
divideArray(myArray);