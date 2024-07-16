let n = 0;
let img = document.querySelectorAll(".img");
img[0].style.display = "block";
let changeImg = (a) => {
    n += a;
    if (n == img.length) {
        n = 0;
    }
    if (n < 0) {
        n = img.length - 1;
    }
    for (let x of img) {
        x.style.display = "none";
    }
    img[n].style.display = "block";
}

setInterval(changeImg, 5000, +1);