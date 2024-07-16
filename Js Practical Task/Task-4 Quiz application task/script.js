const qty = document.querySelector("#qty");
const options = document.querySelector("#options");
const opt = document.querySelectorAll(".opt");

let data = [];
let count = 0;
let score = 0;
let getData = async () => {
    let list = await fetch("https://opentdb.com/api.php?amount=10");
    if (!list.ok) {
        document.querySelector("main").textContent = "Something went wrong!! Unable to fetch the data"
        document.querySelector("main").style.color = "red";
    }
    let res = await list.json();
    data = res.results;
    test(0);
}
getData();

let test = (count) => {
    qty.textContent = `${count + 1}. ${data[count].question}`;
    let index = Math.floor(Math.random() * (data[count]["incorrect_answers"].length))
    console.log(index);
    let option = data[count]["incorrect_answers"];
    option.splice(index, 0, data[count]["correct_answer"])
    let str = "";
    option?.map((x, i) => {
        str += ` <input type="radio" name="options" class="opt opt1" id="" value=${x}><span>${x}</span>`
    })
    document.querySelector(".optionList").innerHTML = str;
    document.querySelector("#num").textContent = score;
    for (let x of opt) {
        x.checked = false;
    }
    if (count == 9) {
        document.querySelector(".btn").textContent = "Submit"
    }
}

let nextQty = (e) => {
    let checkOption = document.querySelector("input[name = options]:checked")?.value;
    let currantCorrect = data[count]["correct_answer"];
    if (checkOption) {
        document.querySelector(".warning").textContent = "";
        count += 1;
        if (checkOption == currantCorrect) {
            score += 1;
        }
        if (count > data.length - 1) {
            document.querySelector("main").textContent = `Your score is ${score} out of 10`
            document.querySelector("main").style.fontSize = "20px";
            document.querySelector("main").style.color = "red";
        }
        else {
            test(count);
        }
    }
    else {
        document.querySelector(".warning").textContent = "please select the option";
    }
}
