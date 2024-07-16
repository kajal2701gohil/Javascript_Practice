// callback function

let test = (a) => {
    // console.log(a);
}

let main = (a, b, callback) => {
    let sum;
    sum = a + b;
    callback(sum);
    // console.log(sum);

}

main(10, 25, test)


// Asynchronous JavaScript - not wait for any function who taking time like settimeout

setTimeout(() => {
    // console.log(12);
}, 2000);


let goal = () => {
    // console.log('await');
};

// console.log(15);
setTimeout(goal, 2000);
// console.log(35);

// promise

let test1 = new Promise((resolve, reject) => {
    let x = 0;
    if (x == 1) {
        resolve("ok");
    }
    else {
        reject("error");
    }
});
test1.then(
    (value) => {
        // console.log(value);
    },
    (error) => {
        // console.log(error);

    },
)

let main2 = new Promise((resolve, reject) => {
    let a = 15, b = -16;
    let sum = a + b;
    if (sum >= 0) {
        resolve(sum)
    }
    else {
        reject("error");
    }

});
main2.then((value) => {
    // console.log(value);
}, (error) => {
    // console.log(error);
})


//  async/await

async function promise() {
    let tets3 = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("solve");
        }, 2000);

    })

    let num = await tets3;
    // console.log(num);
    // console.log(15);
}
promise();

let k = "https://images.pexels.com/photos/8259263/pexels-photo-8259263.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"

// console.log(k);
let changeData = () => {
    console.log("object", k);
    document.getElementById("box").style.border = "2px solid red"

    document.getElementById("box").style.backgroundImage = `url(${k})`;

}

// event loop

console.log(15);
setTimeout(() => {
    // console.log("object");
}, 2000);
console.log(36);

// event loop =>all the loop=>call stack=>web api=>callback queue => all the work done through event loop

// set time out 0
let num = 150;
// console.log("calling..");
setTimeout(() => {
    // console.log("settimeout...", num);
}, 100)
// console.log("runtime...", num);
// console.log("runtime...2");
// console.log("runtime...3");


// promise with settimeout function

let test3 = new Promise((resolve, reject) => {
    let k = 36;
    if (k == 15) {
        resolve("ok...");
    }
    else {
        reject("query...")
    }
})
test3.then((resolve) => {
    console.log(resolve);
}, (error) => {
    console.log("error");
})

const object = { name: "xyz", age: 15, value: "abc" };
console.log(object);

object.age = 32;
console.log(object);

// object = { name: "abc", age: 15, value: "abc" };
// console.log(object);


// const arr = [12, 78, 95];
// console.log(arr);
// arr[1] = 95;
// console.log(arr);
// arr = [30,85,96,78];
// console.log(arr);


// function a() {
//     let cd = 15;
//     function b() {
//         let dk = 60;
//         console.log(cd, dk);
//     }
//     b();
//     console.log(cd, dk);
// }
// a();