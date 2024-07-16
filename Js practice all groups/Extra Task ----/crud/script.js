let array = [];

let input = document.querySelectorAll(".input");
let list = document.querySelector("#list");
let form = document.querySelector(".form");
let num = 0;

let edit;

let getData = () => {
    let obj = {};
    input.forEach(x => {
        if (x.name == "price") {
            obj[x.name] = Number(x.value)
        }
        else {
            obj[x.name] = x.value
        }
    }
    );
    if (edit >= 0) {
        obj.id = array[edit].id;
        array.splice(edit, 1, obj);
        edit = -1;
    }
    else {

        num += 1;
        obj.id = num;
        array.push({ ...obj });
    }
    form.reset();
    print();
}

let print = () => {

    let str = "";
    array?.map((x, i) => {
        str += `<tr>
    <td>${x.id}</td>
    <td>${x.expense}</td>
    <td>${x.price}</td>
    <td>
        <button class="btn btn-warning" onclick="delData(${i})">del</button>
        <button class="btn btn-primary" onclick="editData(${i})">edit</button>
    </td>
</tr>`

    })
    list.innerHTML = str;
    let sum = totalPrice();
    document.getElementById("sum").innerHTML = sum;
}
let delData = (a) => {
    array.splice(a, 1);
    print();
}
let editData = (a) => {
    document.querySelector([`input[name=expense]`]).value = array[a].expense;
    document.querySelector([`input[name=price]`]).value = array[a].price;
    edit = a;
}

let totalPrice = () => {

    let d = array.reduce((x, y) => {
        return x + y.price;
    }, 0);
    return d;
};

let getSort = () => {
    array.sort((x, y) => {
        return x.price - y.price;
    })
    print();
}

// const obj = { name: "abc", age: 45, dec: "abcd" };
// console.log(obj);
// obj.age = 50;
// Object.freeze(obj);
// console.log(obj);
// // obj = { name: "sf", age: 56 };
// console.log(obj);

// console.log(2 == 2);
// console.log(2 == 2 == 2);
// console.log(2 == 2 == 2 == 0);

// const res = 10 + isNaN(2) ? 0 : 20;
// console.log(isNaN(2) ? 0 : 20);

// let xyz = {};
// let test = (data) => {
// data.name = "xys";
// data = 0;
// return { data };

// }
// let k = test(xyz);
// console.log(xyz, k);

// let num = 10;

// let d = (a) => {
// a += 10;
// return a;

// }
// let h = d(num);

// console.log(num, h);
// console.log((true + " ").length);