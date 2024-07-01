
let count = 0;
document.getElementById("h1").innerHTML = "DOM Introduction";

document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("button was clicked....");
    count += 1;
    document.querySelector("p").innerText = count;
    e.target.style.color = "red";
    e.target.style = "border:3px solid blue";
    e.target.setAttribute("class", "div");
});


let changeColor = (e) => {
    e.style.color = "red";
}

document.getElementById("h3").addEventListener("click", function () {
    this.style.color = "pink";
    document.getElementById("h3").append(k);
});

let res = document.getElementsByClassName("para");
console.log(res);
for (let x of res) {
    console.log(x);
    x.addEventListener("click", (e) => {
        e.target.style.border = "2px solid green";
    })
}

console.log(document.getElementsByTagName("p"));

let k = document.createElement("h2");
let h = document.createTextNode("headings 2");
k.append(h);

let removeData = () => {
    document.querySelector("#div1").remove()
}

let replaceData = () => {
    let p = document.querySelector("#div1").firstElementChild;
    document.querySelector("#div1").replaceChild(k, p);
    // document.write("hello world");
}

let animate1 = () => {
    document.getElementById("div4").setAttribute("id", "div5");
}

let touppercase = (a) => {
    a.value = a.value.toUpperCase()
}

let btn1 = document.querySelectorAll(".btn1");
console.log(btn1);

for (let x of btn1) {

    x.addEventListener("click", function () {
        console.log(this.innerHTML);
        document.getElementById("head").style.color = this.innerHTML;
    })
}

// event bubbling

// document.querySelector(".parent").addEventListener("click", () => {
//     console.log("parent is clicked...");
// })
// document.querySelector(".chlid").addEventListener("click", () => {
//     console.log("chlid is clicked...");
// })
// document.querySelector(".btn5").addEventListener("click", (e) => {
//     console.log("btn5 is clicked...");
//     e.stopPropagation();
// })


// event capturing

document.querySelector(".parent").addEventListener("click", () => {
    console.log("parent is clicked...");
})
document.querySelector(".chlid").addEventListener("click", () => {
    console.log("chlid is clicked...");
}, true)
document.querySelector(".btn5").addEventListener("click", (e) => {
    console.log("btn5 is clicked...");

})










// pattern
let n = 9;
let str = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i == 5 || j == 5) {
            str += "*"
        }
        else {
            str += " "
        }
    }
    str += "\n"
}
console.log(str);