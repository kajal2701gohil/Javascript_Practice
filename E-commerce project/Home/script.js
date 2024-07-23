let n = 0;
let img = ["../Images/slider-1.jpg", "../Images/slider-2.jpg", "../Images/slider-3.jpg", "../Images/slider-4.jpg", "../Images/slider-5.jpg", "../Images/slider-6.jpg"]
document.querySelector("#main").style.backgroundImage = `url(${img[4]})`


let changeImg = (a) => {
    n += a;
    if (n == img.length) {
        n = 0;
    }
    if (n < 0) {
        n = img.length - 1;
    }
    for (let x of document.querySelectorAll(".dot")) {
        x.style.backgroundColor = "#555555"
    }
    document.querySelector("#main").style.backgroundImage = `url(${img[n]})`
    document.querySelectorAll(".dot")[n].style.backgroundColor = "#fff";
}

setInterval(changeImg, 5000, +1);


let categories = [
    {
        name: "Bath",
        img: "../Images/categories/bath.jpg"
    },
    {
        name: "Bedding",
        img: "../Images/categories/bedding.jpg"
    },
    {
        name: "Cushion",
        img: "../Images/categories/cushion-covers.jpg"
    },
    {
        name: "Curtains",
        img: "../Images/categories/readymadecurtains.jpg"
    },
    {
        name: "Rugs",
        img: "../Images/categories/rugs.jpg"
    }
]

let getCategories = () => {
    let str = "";
    categories?.map((x, i) => {
        str += `  <div onclick="goProductPage(${i})">
                        <img src=${x.img} alt="bath">
                        <div class="categoryName">
                            <p>Shop</p>
                            <h1>${x.name}</h1>
                        </div>
                    </div>`
    })
    document.querySelector(".categories").innerHTML = str;
}
getCategories();

let goProductPage = (a) => {
    console.log(categories[a]["name"]);
    localStorage.setItem("category", JSON.stringify(categories[a]["name"]))
    window.location.href = "../products/index.html"
}
