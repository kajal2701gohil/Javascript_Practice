let btn = document.querySelectorAll("button");
let resultArea = document.querySelector(".resultArea");
let num1 = 0, num2 = 0;
let result = 0;
let getNumbers = () => {
    num1 = (document.querySelector("#num1").value);
    num2 = (document.querySelector("#num2").value);
    if (num1 == "" || num2 == "") {
        if (num1 == "") {
            document.querySelector(".num1Feedback").textContent = "Please enter the number"
        }
        if (num2 == "") {
            document.querySelector(".num2Feedback").textContent = "Please enter the number"
        }
        resultArea.style.opacity = 0;
    }
    else {
        document.querySelector(".num1Feedback").textContent = document.querySelector(".num2Feedback").textContent = ""
        num1 = Number(num1);
        num2 = Number(num2);
        resultArea.style.opacity = 1;
    }
}


for (let x of btn) {
    x.addEventListener("click", function () {
        getNumbers();
        switch (this.id) {
            case "addition":
                result = num1 + num2;
                break;
            case "subtraction":
                result = num1 - num2;
                break;
            case "multiplication":
                result = num1 * num2;
                break;
            case "division":
                result = num1 / num2;
                break;
            case "C":
                document.querySelector("#num1").value = 0;
                document.querySelector("#num2").value = 0;
                document.querySelector(".num1Feedback").style.display = document.querySelector(".num2Feedback").style.display = "none"
                result = 0;
                break;
            default:
                result = 0;
        }
        num1 = num2 = 0;
        resultArea.textContent = result;
    })
}