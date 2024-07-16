let n = 0;
let second = document.querySelector("#second")
let line = document.querySelector("#line")
let repeat;

let test = () => {
    document.querySelector("#over").style.display = "none";
    n = Number(document.querySelector("#num").value);
    line.style.width = `${n * 100 / 60}%`;
    second.textContent = (n < 10) ? "0" + n : n;
    repeat = setInterval(timeCount, 1000);
    document.querySelector("#num").value = "";
}

let timeCount = () => {
    if (n <= 0) {
        clearInterval(repeat);
        document.querySelector("#over").style.display = "block";
        document.querySelector("#over").textContent = "Count Down is Over"
    }
    else {
        n -= 1;
    }
    second.textContent = (n < 10) ? "0" + n : n;
    line.style.width = `${n * 100 / 60}%`;
}

