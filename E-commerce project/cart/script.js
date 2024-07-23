let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

let printCart = () => {
    let str = "";
    cartProducts?.map((x, i) => {
        str += `
<div>
    <div id="eachProduct">
        <img src=${x.img} alt="" width="10%">
        <div>
            <h3>${x.name}</h3>
            <p>Gift options not available. Gift options not available. Learn more</p>
            <p>Eligible for FREE Shipping</p>
            <p>Size: ${x.size}</p>
            <p>
                Quantity: <input type="number" id="inp" value=${x.qty} onchange="changeQty(this, ${i})" min="1" max="10">
            </p>
        </div>
        <div>
            <p>Price: &#8377;${x.price}</p>
            <button class="btn" onclick=delProduct(${i})>Delete</button>
        </div>
    </div>
</div>
<hr>
`
    })
    document.querySelector("#showCart").innerHTML = str;
    let total = cartProducts?.reduce((x, y) => x + (Number(y.price) * Number(y.qty)), 0);
    let totalQty = cartProducts?.reduce((x, y) => x + y.qty, 0)
    document.querySelector("#totalPrice").textContent = total;
    document.querySelector("#totalItem").textContent = totalQty;
}
printCart();

let delProduct = (a) => {
    cartProducts.splice(a, 1);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));     
    printCart();
}

let changeQty = (product, a) => {
    cartProducts[a]["qty"] = Number(product.value);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    printCart();
}

let placeOrder = () => {
    alert("Your order ready to placed")
    localStorage.removeItem("cartProducts");
    window.location.href = "../Home/index.html"
}