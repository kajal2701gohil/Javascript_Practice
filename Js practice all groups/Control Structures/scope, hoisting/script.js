// "use strict" // stop the hoisting throught use strict word
let global = "global scope";

let test = () => {
    console.log(global);
    let k = "company";
    var d = "employes"
}
test();
console.log(global);
// console.log(d);

if (global) {
    let k = "oscar"
    var h = "career"

}
// console.log(k); // not defined
console.log(h); // career


function main() {
    if (true) {

    }
    for (let i = 0; i <= 5; i++) {
        var k = 15;
    }
    console.log(k);
}
main();


//  Hoisting - use only var keyword

x = 15;
console.log(x);