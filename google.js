// File used at the google tech challenge
function myPrinter(n, max) {

    if (n > max) {
        return;
    }
    else {
        for (let i = 0; i < n; i++) {
            process.stdout.write("*");
        }
        console.log('\n');
        return myPrinter(n+1, max)
    }
}

myPrinter(0, 3);