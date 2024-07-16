
// if else
let age = 30;

if (age >= 18) {
    console.log("you can vote");
}
else {
    console.log("you can not vote");
}



if (age <= 18) {
    console.log("you are teenager");
}
else if (age >= 18 && age <= 30) {
    console.log("you are younger");
}
else {
    console.log("you are 30+");
}


// switch case

let k = 15;
let h = 20;
let s = "+";
let result;

switch (s) {
    case "+":
        result = k + h;
        break;
    case "-":
        result = k - h;
        break;
    case "*":
        result = k * h;
        break;
    case "/":
        result = k / h;
        break;
    case "%":
        result = k % h;
        break;
    default:
        result = 0;
}
// console.log(result);

// loops

// for loop
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("sum=", sum);

//while loop
let i = 0;
while (i < 5) {
    // console.log(i);
    i++;
}

//do while loop
let d = 1;
do {
    console.log(d);
    d++;
}
while (d <= 5);

//functions

// normal function
function test(a, b) {
    console.log("function test is called..", a, b);
    return 15;
}
let f = test(15, 20);
console.log(f);

// anonymous function

let main = function () {
    console.log("function main is called...");
    console.log(arguments);
}
main(1, 2, 3, 5);

// arrow function

let test1 = (...arr) => {
    console.log("arrow function is called...", arr);
}
test1(6, 5, 9, 7, 8);

let toggle = a => a;
let j = toggle(5);
console.log(j);
