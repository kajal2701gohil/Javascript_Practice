
let btn = document.getElementById("btn");
let list = document.getElementById("list");


// btn.addEventListener("click", () => {
//     console.log("button was clicked....")
// });
let changeData = (a) => {
    document.getElementById("h1").innerHTML = "Change the text";
    a.style.color = 'red';
    console.log("button was clicked2....")
}



// variable declare in javascript

var num = 150; // this is used in old version, and it is use full in hoisting
let test = "company"; // let comes from ES6
const str = "string"; //const variable is not changable
let list1;
list1 = list.firstElementChild;
list1.innerHTML = num;

list1.nextElementSibling.textContent = test;
list.lastElementChild.innerHTML = str;

// str = 260;
// console.log(str); // it through the error


// Data Types

//1) number
let n = 150; // all the numeric 

//2) string
let s = "hello world"// group of character

// 3) boolean
let b = true // boolean value true & false

// 4) null
let f = null;
// console.log(f);
// typeof
// console.log(typeof f); //object
// console.log(Number(f)); // 0
// console.log(Boolean(f)); // false

//5)undefine // any variable not exist or defined
// console.log(typeof undefined); //undefined
// console.log(Number(undefined)); // nan
// console.log(Boolean(undefined)); // false

//6)array //multiple difference type of variable store in single variable
let arr = ['surat', 120, true, undefined, null, ""];
// console.log(arr); ['surat', 120, true, undefined, null, ""]

// 7) object  // store value in key and value pair
let obj = {
    name: "abc",
    age: 15,
    city: "surat",
    Roll_no: 10
};
// console.log(obj.age); //15
// console.log(obj["Roll_no"]); //10
obj.country = "gujarat";

delete obj.age;
obj.name = "xyz"
// console.log(obj);


// Operators

let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let x =Number(prompt("enter the number for X"));


let y =Number(prompt("enter the number for y"));
n1.innerHTML = `number1=${x}`;
n2.innerHTML = `number2=${y}`;

let result;

//1) arithemetic operator
result = x + y;
result = x - y;
result = x * y;
result = x / y;
result = x % y;

x++ & x--; // increase or decrease the value but assign in new line
++x & --x;// increase or decrease and assign value in same line

console.log(x);

// 2) comparison operators - retrun the true false
// == check only the value and === check the valur and data type both
console.log(10 == 10); //true
console.log(9 > 10); // false
console.log(12 < 5); //false
console.log("" == 0);//true
console.log("12" == 12);//true
console.log("12" === 12); //false
console.log(0 != 0); //false
console.log(45 >= 50);//false

// 3) bitwise operator
let a = 10, c = 20;
console.log(a & c);
console.log(a | c);
console.log(a ^ c);
console.log(a >> c);
console.log(a >>> c);
console.log(a << c);

// 4) logical operator check the condition
// && - check both condition true
let p = true, q = 150;

if (p == true && q == 150) {
    console.log("both condition satisfied");
}
if (typeof p == "boolean" || q == true) {
    console.log("only one conditino satisfied");
}
if(p!=false)
    {
        console.log("given condition is not true");
    }


// 5) Assignment operator - to assign value
let w;
w=10;
console.log(w+=2);//12
console.log(w-=5);//7
console.log(w*=5);//35
console.log(w/=7);//5
console.log(w%=2);//1

// 6) special operator (ternory opeator) - used for single line condition

(15>12)?console.log('true'):console.log("false");