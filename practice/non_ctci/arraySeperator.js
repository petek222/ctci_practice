// Input:  [12 11 -13 -5 6 -7 5 -3 -6]
// Output: [-13 -5 -7 -3 -6 12 11 6 5]

let seperateArray = (array) => {

    for (let i = 0; i < array.length; i++) {

        // If negative, lets move it to the back
        if (array[i] < 0) {

            let cur = array[i];
            let index = i-1;

            while (array[index] > 0) {

                let save = array[index];
                array[index] = cur;
                array[index+1] = save;
                index--;
            }
        }
    }
    console.log(array);
}

let myArray = [12, 11, -13, -5, 6, -7, 5, -3, -6];
seperateArray(myArray);