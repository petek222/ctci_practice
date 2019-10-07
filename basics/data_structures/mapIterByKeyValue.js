var p = new Map();
p.set('p1', 1);
p.set('p2', 2);
p.set('p3', 3);

p.forEach(printer);

function printer(key, value) {
    console.log(value);
    console.log(key);
}
