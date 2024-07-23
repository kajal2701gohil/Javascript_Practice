let category = JSON.parse(localStorage.getItem("category"))
let products = [];
let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
let getProducts = async () => {
    let data = await fetch("data.json")
    let res = await data.json();
    let result = res;
    for (let x in result) {
        if (x == category) {
            products = result[x]
            printProducts(products)
        }
    }
}
getProducts();
let printProducts = (products) => {
    let str = "";
    products?.map((x, i) => {
        str += ` <div>
    <img src=${x.img}>
    <div class="productData">
        <div id="name5">
            <h3>${x.name}</h3>
            <p> &#8377;${x.price}</p>
        </div>
        <p>${x.size}</p>
        <div style="text-align: center;">
            <button class="btn" onclick="checkValidUser(${i})">Add to Cart</button>
            <button class="btn"><a href="../Home/index.html">Order Now</a></button>
        </div>
    </div>
</div>
`
    })
    document.querySelector(".products").innerHTML = str;
}
let getLowPrice = () => {
    products = products?.sort((x, y) => x.price - y.price);
    printProducts(products);
}
let getHighPrice = () => {
    products = products?.sort((x, y) => y.price - x.price);
    printProducts(products);
}
let getSize = () => {
    let arr = [];
    let size = products?.forEach(x => arr.push(x.size))
    let sortSize = Array.from(new Set(arr));
    let str = "";
    sortSize?.map(x => {
        str += `<p onclick=filterSIze(this)>${x}</p>`
    })
    document.querySelector("#sizeData").innerHTML = str;
}
let filterSIze = (a) => {
    let newProducts = products?.filter(x => x.size == a.textContent);
    printProducts(newProducts);
}
let getClassic = () => {
    let newProducts = products?.filter(x => x.design == "Classic");
    printProducts(newProducts);
}
let getFloral = () => {
    let newProducts = products?.filter(x => x.design == "Floral");
    printProducts(newProducts);
}
let checkValidUser = (i) => {
    let getUserEmail = JSON.parse(localStorage.getItem("loginEmail"));
    let allUserData = JSON.parse(localStorage.getItem("registerData"));
    let checkEmail = allUserData?.some((x) => x.email == getUserEmail);
    let index = cartProducts?.findIndex(x => x.name == products[i].name)
    if (checkEmail) {
        if (index >= 0) {
            cartProducts[index]["qty"] += 1;
        }
        else {
            products[i]["qty"] = 1;
            cartProducts.push(products[i]);
        }
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        window.location.href = "../cart/index.html"
    }
    else {
        alert("Please login before add to cart");
         window.location.href = "../login-signup-forgot-password page/index.html"
    }
}