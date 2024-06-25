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


// Asynchronous JavaScript - noe wait for any function who taking time like settimeout

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
let chnageData = () => {
    console.log("object", k);
    document.getElementById("box").style.border = "2px solid red"

    document.getElementById("box").style.backgroundImage = `url(${k})`;

}

// event loop

console.log(15);
setTimeout(() => {
    console.log("object");
}, 2000);
console.log(36);

// event loop =>all the loop=>call stack=>web api=>callback queue => all the work do throught event loop