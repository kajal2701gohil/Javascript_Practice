document.querySelector("#header").innerHTML = `
<div class="middle">
    <div class="head">
        <div><img src="../Images/logo.svg" alt="logo" width="150">
        </div>
        <div>
            <ul>
                <li><a href="#main">Shop</a></a></li>
                <li><a href="#main">Discover</a></li>
                <li><a href="#main">Style Expert</a></li>
                <li><a href="#main">Blog</a></li>
                <li><a href="#main">Sustainability</a></li>
                <li><a href="#main">Store Locator</a></li>
            </ul>
        </div>
    </div>
    <div id="icon">
        <i class="fa-regular fa-user"></i>
        <button type="" class="btn reset"><a href="../reset-password/index.html">Reset password</a></button>
        <a href="../cart/index.html"> <i class="fa-solid fa-basket-shopping"></i></a>
        <button type="" class="btn"><a href="../login-signup-forgot-password page/index.html">login</a></button>
        <i class="fa-solid fa-right-from-bracket" title="Log-out" onclick="logOutUser()"></i>
        <i class="fa-solid fa-bars" id="bar"></i>
    </div>
</div>
<div class="navBar">
    <ul>
        <li><a href="#main">Shop</a></a></li>
        <li><a href="#main">Discover</a></li>
        <li><a href="#main">Style Expert</a></li>
        <li><a href="#main">Blog</a></li>
        <li><a href="#main">Sustainability</a></li>
        <li><a href="#main">Store Locator</a></li>
    </ul>
</div>
`

document.querySelector("#footer").innerHTML = `
<div class="middle">
    <div>
        <div class="footerDiv">
            <h5>ONLINE SHOP</h5>
            <ul>
                <li><a href="#main">BED</a></li>
                <li><a href="#main">BATH</a></li>
                <li><a href="#main">RUGS</a></li>
                <li><a href="#main">READY MADE CURTAINS</a></li>
                <li><a href="#main">CUSHIONS</a></li>
                <li><a href="#main">GIFTING</a></li>
                <li><a href="#main">HOME DECOR ACCESSORIES</a></li>
                <li><a href="#main">OFFERS</a></li>
            </ul>
        </div>
        <div class="footerDiv">
            <h5>DISCOVER</h5>
            <ul>
                <li><a href="#main">CURTAINS</a></li>
                <li><a href="#main">UPHOLSTERY</a></li>
                <li><a href="#main">BED & BATH</a></li>
                <li><a href="#main">BLINDS</a></li>
                <li><a href="#main">WALLPAPER</a></li>
                <li><a href="#main">RUGS</a></li>
                <li><a href="#main">SUNBRELLA</a></li>

            </ul>
        </div>
        <div class="footerDiv">
            <h5>
                CORPORATE
            </h5>
            <ul>
                <li><a href="#main">ABOUT US</a></li>
                <li><a href="#main">LEADERSHIP</a></li>
                <li><a href="#main">MILESTONES</a></li>
                <li><a href="#main">STYLE EXPERT</a></li>
                <li><a href="#main">BLOG</a></li>
                <li><a href="#main">STORE LOCATOR</a></li>
                <li><a href="#main">MEDIA</a></li>
                <li><a href="#main">T & C'S</a></li>
                <li><a href="#main">CAREERS</a></li>
                <li><a href="#main">NEWS & EVENTS</a></li>
                <li><a href="#main">FRANCHISE ENQUIRY</a></li>
                <li><a href="#main">SUSTAINABILITY</a></li>
            </ul>
        </div>
        <div class="footerDiv">
            <h5>GET IN TOUCH</h5>
            <ul>
                <li><a href="#main"> LIVE CHAT</a></li>
                <li><a href="#main"> LEAVE US A FEEDBACK</a></li>
                <li><a href="#main"> REQUEST AN APPOINTMENT</a></li>
            </ul>
            <div style="padding: 15px 0;">
                <h5>
                    CALL US
                </h5>
                <li> <a href="#main"> 1800 267 9008 (TOLL FREE)</a></li>
            </div>
            <img src="../Images/footer-logo_1_.png" width="130" style="padding: 15px 0;">
            <h5>FOLLOW US</h5>
            <div id="contact">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-pinterest"></i>
            </div>
        </div>
    </div>
    <div class="copyright">
        <div>
            <h5>CONTACT US</h5>
           <form>
            <input type="text" placeholder="Enter your Name">
            <input type="email" placeholder="Enter your email address">
            <textarea rows="4" placeholder="Enter your message"></textarea>
            <button class="btn">Submit</button>
           </form>
        </div>
        <div style="padding: 25px 0;">
            <h5>COPYRIGHT 2024 D’DECOR</h5>
        </div>
    </div>
</div>
`

document.querySelector("#bar").addEventListener("click", () => {
    document.querySelector(".navBar").classList.toggle("hide")
})

document.querySelector(".fa-user").addEventListener("click", () => {
    document.querySelector(".reset").classList.toggle("hide")
})

let logOutUser = () => {
    let res = confirm("Are you sure you want to Logout?")
    if (res) {
        localStorage.removeItem("loginEmail");
        window.location.href = "../Home/index.html"
    }
}