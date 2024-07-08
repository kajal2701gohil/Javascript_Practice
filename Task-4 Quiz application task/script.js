const qty = document.querySelector("#qty");
const options = document.querySelector("#options");
const opt = document.querySelectorAll(".opt");
let data = [];
let count = 0;
let score = 0;
let getData = async () => {
    let list = await fetch("https://opentdb.com/api.php?amount=10");
    if (!list.ok) {
        document.querySelector("main").textContent = "Something went wrong!! Unable to fecth the data"
        document.querySelector("main").style.color = "red";
    }
    let k = await list.json();
    data = k.results;
    test(0);
}
getData();

let test = (count) => {
    qty.textContent = `${count + 1}. ${data[count].question}`;
    if (data[count].type == "boolean") {
        document.querySelector(".opt1").value = document.querySelector(".opt1").nextElementSibling.textContent = data[count]["correct_answer"];
        document.querySelector(".opt2").value = document.querySelector(".opt2").nextElementSibling.textContent = data[count]["incorrect_answers"][0];
        document.querySelector(".opt3").value = document.querySelector(".opt3").nextElementSibling.textContent = document.querySelector(".opt4").value = document.querySelector(".opt4").nextElementSibling.textContent = "";
        document.querySelector(".opt3").style.display = document.querySelector(".opt4").style.display = "none";
    }
    else {
        document.querySelector(".opt3").style.display = document.querySelector(".opt4").style.display = "inline";
        document.querySelector(".opt1").value = document.querySelector(".opt1").nextElementSibling.textContent = data[count]["correct_answer"];
        document.querySelector(".opt2").value = document.querySelector(".opt2").nextElementSibling.textContent = data[count]["incorrect_answers"][0];
        document.querySelector(".opt3").value = document.querySelector(".opt3").nextElementSibling.textContent = data[count]["incorrect_answers"][1];
        document.querySelector(".opt4").value = document.querySelector(".opt4").nextElementSibling.textContent = data[count]["incorrect_answers"][2];
    }
    for (let x of opt) {
        x.checked = false;
    }
    if (count == 9) {
        document.querySelector(".btn").textContent = "Submit"
    }
}

let nextQty = (e) => {
    if (count < data.length - 1) {
        let k = document.querySelector("input[name = options]:checked")?.value;
        if (k) {
            if (k == data[count]["correct_answer"]) {
                score += 1;
            }
            document.querySelector(".warning").textContent = "";
            count += 1;
            test(count);
        }
        else {
            document.querySelector(".warning").textContent = "please select the option";
        }
    }
    else {
        document.querySelector("main").textContent = `Your score is ${score} out of 10`
        document.querySelector("main").style.fontSize = "20px";
        document.querySelector("main").style.color = "red";
    }
}
