// console.log("object");

let obj = {}; // create
obj.name = "xyz"
obj.age = 30;
obj.city = "surat"
obj["Roll. no"] = 10;

// console.log(obj); // read
obj.name = 'abc'
// console.log(obj); //update
delete obj.city;
obj.age = '';
// console.log(obj); //delete

// array
let arr;
arr = [12, "surat", "", null, undefined, false, 0, "#"];
// console.log(arr);

arr[2] = "point";
// console.log(arr);

delete arr[3]; // it create empty
// arr.length = 0;
// arr=[];

// array methods

// 1)map - it doing some specific peration on all array element and return update array
let k = arr.map(x => x * 2);
// console.log(k); -  [24, NaN, NaN, empty, NaN, 0, 0, NaN]
k = arr.map(x => typeof x == "number");
// console.log(k); -[true, false, false, empty, false, false, true, false]

// 2)fillter-it check the specific condition on all array element and return the true array
k = arr.filter(x => typeof x == "string");
// console.log(k);  -['surat', 'point', '#']
// console.log(arr);
k = arr.filter(x => x * 2);
// console.log(k); - [12]

// 3)reduce  = return the only one element by doing specific element in all array element
let arr2;

arr2 = [1, 2, 3, 4, 5];
let arr3 = [{
    name: 'xyz',
    roll: 10
},
{
    name: 'xyz',
    roll: 10
},
{
    name: 'xyz',
    roll: 20
},
{
    name: 'xyz',
    roll: 30
},
{
    name: 'xyz',
    roll: 50
},
{
    name: 'xyz',
    roll: 60
},]
k = arr3.reduce((x, y) => x + y.roll, 0);
// console.log(k); - 180
k = arr2.reduceRight((x, y) => x - y, 20);
// console.log(k); - 5

// 4) fill =- used to fill array elemnt by one element - it change the main array
// console.log(arr);
// arr.fill("@");
// console.log(arr); - ['@', '@', '@', '@', '@', '@', '@', '@']

// 5) find - find check the given condition array all element where satisfy the retrun the array element
console.log(arr3);
k = arr3.find(x => x.roll == 60);
// console.log(k); - {name: 'xyz', roll: 60}

// 6) indexof - give the indexof given element
k = arr2.indexOf(3);
// console.log(k); - 2

// 7)lastindexof - find the element form right side
let arr4 = [1, 2, 5, 9, 4, 5, 9];
k = arr4.lastIndexOf(9);
// console.log(k); - 6

// 8)pop - remove the array element from the end - in change in origin array
arr4.pop();
// console.log(arr4); - [1, 2, 5, 9, 4, 5]


// 9)shift - remove the array element from the start - in change in origin array
arr4.shift();
// console.log(arr4); - [2, 5, 9, 4, 5]

// 10) push - add the element in array from the end - change in original array
arr4.push("surat");
// console.log(arr4); - [2, 5, 9, 4, 5, 'surat']

// 11)unshift - add the element in array from the start- change in original array
arr4.unshift("gujarat")
// console.log(arr4); - ['gujarat', 2, 5, 9, 4, 5, 'surat']


// 12) findindex - find check the given condition array all element where satisfy the retrun the index of  element

k = arr3.findIndex(x => x.roll == 60);
// console.log(k);  - 5

// 13) includes- return true false
k = arr2.includes(3);
// console.log(k); - true

// 14)splice
console.log(arr);
k = arr.splice(1, 2, 45, 89, "gujarat", "%");
// console.log(arr); - [12, 45, 89, 'gujarat', '%', empty, undefined, false, 0, '#']
// console.log(k); - ['surat', 'point']

// 15)slice
k = arr.slice(2, 5)
// console.log(k); - [89, 'gujarat', '%']

// 16)join - convert into string by character
console.log(arr);
k = arr.join("*");
// console.log(k); - 12*45*89*gujarat*%***false*0*#

// 17)reverse - array reversed
k = arr.reverse();
//  console.log(k); - ['#', 0, false, undefined, empty, '%', 'gujarat', 89, 45, 12]

//  18)sort - it sorting the array
let arr5 = [1, 12, 45, 620, 120, 450, 950];
k = arr5.sort();
//  console.log(k); -  [1, 12, 120, 45, 450, 620, 950]
k = arr5.sort((x, y) => x - y)
// console.log(k); -[1, 12, 45, 120, 450, 620, 950]
console.log(arr3);
k = arr3.sort((x, y) => y.roll - x.roll);
// console.log(k); - 

// 19)some 
k = arr3.some((x) => x.roll == 60);
// console.log(k); - true

// 20)