
// "use strict"
// string method

let str = 'oscar career point';
let k;
// charAt() - to find the character
k = str.charAt(6);
// console.log(k); - c

let str2 = "institute";
// concat - merge to string
k = str.concat(" ", str2, " ");
// console.log(k); - oscar career point institute 

// indexof - to find the index of enter element
k = str.indexOf("r");
// console.log(k); -4

// lastindexof - to find the index from right side
k = str.lastIndexOf("r");
// console.log(k); -11

// replace - replace the string with enter string
k = str.replace("r", "k");
// console.log(k); -oscak career point

// replaceall
k = str2.replaceAll("t", "o");
// console.log(k); - insoiouoe

// search - find the index
k = str.search("poi");
// console.log(k); - 13

// slice - to get the substring
k = str.slice(5, 9);
// console.log(k); -  car

// substr
k = str.substr(2, 9);
// console.log(k); - car caree

// substring
k = str.substring(2, 5);
// console.log(k); -car

// touppercase
k = str2.toUpperCase();
// console.log(k); - INSTITUTE

let str3 = "COMPANY";
k = str3.toLowerCase();
// console.log(k); - company

// valueof
k = str2.valueOf();
// console.log(k);

let str4 = " trim "
k = str4.trim();
// console.log(k); - trim


// tostring - convert into string
let n = 150;
k = n.toString();
// console.log(typeof k); = string

// includes - retrun true false
k = str.includes(" ");
// console.log(k); - true

// charcodeof - give the character code means ASCII value
console.log(str);
k = str.charCodeAt(5);
// console.log(k); -32

// match() - use regex expression
let h = /poi/;
k = str.match(h);
// console.log(k); - ['poi', index: 13, input: 'oscar career point', groups: undefined]

// split - convert string into array
k = str2.split("");
// console.log(k); - ['i', 'n', 's', 't', 'i', 't', 'u', 't', 'e']


// object methods

let obj = {
    name: "xyz",
    age: 20,
    city: "surat",
    country: "india",
    dec: function () {
        return this.name;
    }
}

function test(state) {
    return state;
}
obj.test = test("gujarat");

// console.log(obj.test);

obj.main = () => {

};
// console.log(obj.main);
// console.log(obj.dec);

k = Object.keys(obj);
// console.log(k);
k = Object.values(obj);
// console.log(k);
k = Object.entries(obj);
// console.log(k);



let target = { a: 1, b: 2, c: 10 };
let source = { b: 4, c: 5, a: 20 };
k = Object.assign(source, target);
// console.log(k);

Object.freeze(target);
target.a = 50;
delete target.b;
target.z = 60;
// console.log(target); -{ a: 1, b: 2, c: 10 }

// JSON Format

// JSON.stringify - convert data in json formatted string
let array = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "yellow",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
]

k = JSON.stringify(array);
console.log(k);
console.log(array);

let d = JSON.parse(k);
console.log(d);