let n = document.querySelector("#num");
let hint = document.querySelector("#hint");
let attempts = 0;

document.querySelector(".btn").addEventListener("click", () => {
    hint.style.display = "block";
    attempts += 1;
    let num = Number(n.value);
    let random = Math.floor(Math.random() * 101);
    if (random == num) {
        hint.textContent = "You Guessed: Yippee, Correct!"
        document.querySelector(".btn-outline-danger").style.display = "inline-block";
    }
    else {
        if (num > random) {
            hint.textContent = "You guessed too high!"
        }
        if (num < random) {
            hint.textContent = "You guessed too small!"
        }
    }
    document.querySelector("#total").textContent = attempts;
    n.value = "";

})
let playAgain = () => {
    attempts = 0;
    document.querySelector("#total").textContent = attempts;
    let invisible = document.querySelectorAll(".invisibl");
    for (let x of invisible) {
        x.style.display = "none";
    }
}