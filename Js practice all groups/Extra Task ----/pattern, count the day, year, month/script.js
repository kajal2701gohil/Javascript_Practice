// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

function addition(a, b) {
    return a + b
}
// console.log(addition(3, 2));
// console.log(addition(-3, -6));
// console.log(addition(7, 3));

function convert(a) {
    return a * 60
}
// console.log(convert(5));
// console.log(convert(3));
// console.log(convert(2));

let countTrue = (a) => {
    let d = a.filter(x => x);
    return d.length;
};

// console.log(countTrue([]));

let res = (a) => {
    return function f1() {
        return a;
    };
}
const f1 = res("apple");
// console.log(typeof function () { });

let fibstr = (a, arr) => {
    // console.log(arr.length);
    if (arr?.length == 2) {
        return arr;
    }
    else {
        let arr = fibstr(a - 1);
        // console.log(arr);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }

}
// console.log(fibstr(5, ["j", "p"]));


let calcAge = (a) => {
    a *= 365;
    // console.log(a);
};
calcAge(20);

let getFirstValue = (a) => {
    let k = a.unshift(52);
    // console.log(a);
}
getFirstValue([50, 2, 3]);

// factorial of number;

let num = (n) => {
    if (n == 1) {
        return 1;

    }
    else {
        return n * num(n - 1);
    }
};
// console.log(num(5));

// let k = Array.from("13")
let k = Array.of(5, 45, 96);
// console.log(k);

// console.log(this);
let sum = 0;
function res2(a, b) {
    return (Math.min(...a) > Math.min(...b)) && (Math.max(...a) < Math.max(...b)) ? "true" : "false";


}
console.log(res2([1, 2, 3, 4], [2, 3]));

// pattern
let d = 1;
let str = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j <= i) {
            str += d + " ";
            d++;
        }
        else {
            str += "";
        }
    }
    str += "\n"
}
console.log(str);
document.write(str);


// reverse string
let arr = [1, 2, 6, 5, 10, 12, 16, 18];
for (let i = 0; i < arr.length; i += 2) {
    // console.log(i);
}

let num1 = 10;
let count = 0;
let sum2 = 0;
for (let i = 1; i <= num1; i++) {
    sum2 += i;
    console.log(num1, "X", i, "=", num1 * i);
    if (num1 % i == 0) {
        count++;
        console.log(i);
    }
}
console.log(sum2);
if (count == 2) {
    console.log("prime number");
}
else {
    console.log("prime number not");
}



// count month and day between you year
let y1 = 2020, y2 = 2030;
let year = y2 - y1;
console.log(year);
console.log(year * 12, "month");
console.log(year * 365, "day");

let day = 0;
for (let i = y1; i < y2; i++) {
    if ((i % 400 == 0) || ((i % 100 != 0) && (i % 4 == 0))) {
        console.log(i);
        day += 366;
    }
    else {
        day += 365;
    }

}
console.log(day);
console.log(day/365);
console.log(day/12);

console.log(document.querySelector("#link").closest("div"));