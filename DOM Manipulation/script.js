
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

// traversing 
console.log(document.querySelector(".selection").childNodes);
console.log(document.querySelector(".selection").firstElementChild);
console.log(document.querySelector(".selection").lastElementChild);
console.log(document.querySelector("#span").parentElement);
console.log(document.querySelector("#span").nextElementSibling);
console.log(document.querySelector("#span").nextSibling);
console.log(document.querySelector("#span").previousElementSibling);
console.log(document.querySelector("#span").previousSibling);

let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
console.log(h1, h2);
document.querySelector(".selection").appendChild(h1, h2);


document.querySelector("#span").addEventListener("click", function () {
    this.classList.toggle("sec2");
})


window.addEventListener("load", () => {
    console.log("page loaded....");
})
window.addEventListener("DOMContentLoaded", () => {
    console.log("dom loaded....");
})
window.addEventListener("keydown", () => {
    console.log("kewydown..");
})
window.addEventListener("keyup", () => {
    console.log("kewyup..");
})
window.addEventListener("keypress", () => {
    console.log("kewpress..");
})
window.addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
        console.log("pageup");
    }
    else if (event.deltaY > 0) {
        console.log("pagedown");
    }
    // console.log("page is scrolling...",event.deltaY>0);
    // document.body.style.backgroundColor = 'grey'
})


// for (let i = 0; i < 1_000_000_000; i++);

// input event
let inp = document.querySelector(".inp");
inp.addEventListener("input", () => {
    console.log("typing...");
})
inp.addEventListener("change", () => {
    console.log("typing change...");
})
inp.addEventListener("focus", () => {
    console.log("input is focus..");
})
inp.addEventListener("blur", () => {
    console.log("input is bluring..");
})

btn.style.color = "green"

btn.addEventListener("contextmenu", (e) => {
    console.log("object");
    e.preventDefault();
})


// form validation

document.querySelector(".form").addEventListener("submit", (e) => {
    console.log("form submitted...");
    e.preventDefault();
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