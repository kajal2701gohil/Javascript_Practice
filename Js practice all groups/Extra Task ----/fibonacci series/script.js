// let n = 5, a = 0, b = 1, c = 0, array = [0, 1];

// for (let i = 2; i < n; i++) {
//     c = a + b;
//     array.push(c);
//     a = b;
//     b = c;
// }

// function ab() {
//     if (array.length < 5) {
//         c = a + b;
//         array.push(c);
//         a = b;
//         b = c;
//         ab();
//     }
//     else {
//         console.log(array);

//     }
// }


// ab();


function num(n) {
    if (n === 0) {
        return 1;
    }

    return n * num(n - 1);
}
const x = num(5);
function counter(count) {

    console.log(count);

    if (count > 1) {

        count = count - 1;

        counter(count);
    } else {

        return;
    };
};

function febo(n) {
    let array = [0, 1], a = 0, b = 1, c = 0;

    c = a + b;
    return c;
}
const y = febo(5);
// console.log(y);

let array1 = [12, 56, 12, 48, 77, 48, 20];

let main = new Set(array1);

// console.log(main);

function test() {
}
test();

let main3 = () => {
}
main3();


function sum(a) {
    if (a == 0) {
        return 0;
    }
    else {
        return a + sum(a - 1);
    }
}
// console.log(sum(5));

let arr = [];

// let k = [5, 1];
// console.log(k[k.length - 1] + k[k.length - 2]);

function sum1(a) {
    if (a == 1) {
        return [0];
    }
    else if (a == 2) {
        return [0, 1];
    }
    else {
        let k = sum1(a - 1);
        k.push(k[k.length - 1] + k[k.length - 2]);
        return k;
    }
}
// sum1(6);
// console.log(sum1(6));
// function sum1(a) {
//     if (arr.length == a) {
//         return arr;
//     }
//     else if (arr.length == 2) {
//         return arr[0, 1];
//     }
//     else {
//         let k = arr[arr.length - 1] + arr[arr.length - 2];
//         console.log(k);
//         arr.push(k);
//         return arr;
//     }
// }
// console.log(sum1(5));


function total(n) {

    if (n == 2) {
        return [0, 1];
    }
    else {
        let arr = total(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}
console.log(total(5));



