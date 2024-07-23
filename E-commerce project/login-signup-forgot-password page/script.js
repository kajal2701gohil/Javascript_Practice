let goSignUp = () => {
    document.querySelector("#loginPage").style.display = "none";
    document.querySelector("#signPage").style.display = "block";
}

let backToLogin = () => {
    document.querySelector("#signPage").style.display = "none";
    document.querySelector("#loginPage").style.display = "block";
}

let goForgotPasswordPage = () => {
    document.querySelector("#loginPage").style.display = "none";
    document.querySelector("#forgotPasswordPage").style.display = "block";
}

// signup page validation
let registerData = JSON.parse(localStorage.getItem("registerData")) || [];
let signupForm = document.querySelector(".signupForm");
let name1 = signupForm.querySelector("#name");
let email = signupForm.querySelector("#email");
let password = signupForm.querySelector("#password");
let confirmPassword = signupForm.querySelector("#confirmPassword");
let nameFeedback = signupForm.querySelector(".name");
let emailFeedback = signupForm.querySelector(".email");
let passwordFeedback = signupForm.querySelector(".password");
let confirmPasswordFeedback = signupForm.querySelector(".confirmPassword");


name1.addEventListener("change", (e) => {
    if (e.target.value == "") {
        nameFeedback.textContent = "This field is required"
        nameFeedback.style.color = "red";
    }
    else if (e.target.value.length < 3) {
        nameFeedback.textContent = "Name must be at least 3 characters long."
        nameFeedback.style.color = "red";
    }
    else {
        let regex = /[.!@#$%^&*()<>{}/?:;,.~(0-9)|[\]\\/%]/g;
        let validName = regex.test(e.target.value)
        if (validName) {
            nameFeedback.textContent = "Name must not contain numbers or special characters."
            nameFeedback.style.color = "red";
        } else {
            nameFeedback.textContent = "Looks good!";
            nameFeedback.style.color = "green";
        }
    }
})

email.addEventListener("change", (e) => {
    if (e.target.value == "") {
        emailFeedback.textContent = "This field is required";
        emailFeedback.style.color = "red";
    }
    else {
        let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        let validEmail = regex.test(e.target.value);
        if (!validEmail) {
            emailFeedback.textContent = "Email must be in a valid email format (e.g., user@example.com)"
            emailFeedback.style.color = "red";
        }
        else {
            emailFeedback.textContent = "Looks good!";
            emailFeedback.style.color = "green";
        }
    }
})

password.addEventListener("change", (e) => {
    if (e.target.value == "") {
        passwordFeedback.textContent = "This field is required"
        passwordFeedback.style.color = "red";
    }
    else if (e.target.value.length < 8) {
        passwordFeedback.textContent = "Password must be at least 8 characters long."
        passwordFeedback.style.color = "red";
    }
    else {
        let regex = /(?=.*\d)(?=.*[!@#$%^&*()_=+{}[\]:;<>,.?/~\\-])(?=.*[a-z])(?=.*[A-Z]).*/
        let validPassword = regex.test(e.target.value);
        if (!validPassword) {
            passwordFeedback.textContent = "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character."
            passwordFeedback.style.color = "red";
        }
        else {
            passwordFeedback.textContent = "Looks good!";
            passwordFeedback.style.color = "green";
        }
    }
})

confirmPassword.addEventListener("change", (e) => {
    if (e.target.value == "") {
        confirmPasswordFeedback.textContent = "This field is required"
        confirmPasswordFeedback.style.color = "red";
    }
    else {
        let confirm = e.target.value == password.value;
        if (!confirm) {
            confirmPasswordFeedback.textContent = "Confirm password not match with password"
            confirmPasswordFeedback.style.color = "red";
        }
        else {
            confirmPasswordFeedback.textContent = "Looks good!";
            confirmPasswordFeedback.style.color = "green";
        }
    }
})

signupForm.addEventListener("change", () => {
    let allFeedbackArray = [];
    let allFeedback = signupForm.querySelectorAll(".feedback");
    allFeedback.forEach(x => (x.textContent != "Looks good!") ? allFeedbackArray.push(x) : "");
    if (allFeedbackArray.length == 0) {
        signupForm.querySelector(".submit").removeAttribute("disabled");
        signupForm.querySelector(".submit").addEventListener("click", (e) => {
            Swal.fire({
                title: "Thank You for Registration!",
                text: "Congratulations your account has been successfully done.",
                icon: "success",
            }).then(function () {
                signupForm.reset();
                allFeedback.forEach(x => x.textContent = "");
            })
        })
        let obj = {};
        obj.name = name1.value;
        obj.email = email.value;
        obj.password = password.value;
        registerData.push(obj);
        localStorage.setItem("registerData", JSON.stringify(registerData));
    }
    else {
        signupForm.querySelector(".submit").setAttribute("disabled", true);
    }
})



// login page validation
let loginForm = document.querySelector("#loginPage");
let loginEmail = loginForm.querySelector("#email1")
let loginPassword = loginForm.querySelector("#password1")
let loginEmailFeedback = loginForm.querySelector(".email1");
let loginPasswordFeedback = loginForm.querySelector(".password1");

loginPasswordFeedback.textContent = loginEmailFeedback.textContent = "";

let userLogin = () => {
    registerData = JSON.parse(localStorage.getItem("registerData"));
    if (loginEmail.value == "") {
        loginEmailFeedback.textContent = "This field is required";
        loginEmailFeedback.style.color = "red";
    }
    if (loginPassword.value == "") {
        loginPasswordFeedback.textContent = "This field is required";
        loginPasswordFeedback.style.color = "red";
    }
    let checkUser = registerData?.find(x => x.email == loginEmail.value);
    if (checkUser) {
        loginEmailFeedback.textContent = "";
        let checkPassword = checkUser.password == loginPassword.value;
        loginPasswordFeedback.textContent = "";
        if (checkPassword) {
            Swal.fire({
                title: "Successfully login!",
                icon: "success",
            }).then(function () {
                localStorage.setItem("loginEmail", JSON.stringify(loginEmail.value));
                loginForm.querySelector("form").reset();
                window.location.href = "../Home/index.html"
            })
        }
        else {
            loginPasswordFeedback.textContent = "Incorrect password.";
            loginPasswordFeedback.style.color = "red";
        }
    }
    else {
        loginEmailFeedback.textContent = "Email is not available";
        loginEmailFeedback.style.color = "red";
    }
}


// Forgot password page 
let forgotForm = document.querySelector("#forgotPasswordPage");
let feedback = forgotForm.querySelector(".feedback");
let p = forgotForm.querySelector("p");
let captchaInp = forgotForm.querySelector("#captchaInp");
let changePasswordDiv = forgotForm.querySelector(".changePasswordDiv");
let password3 = forgotForm.querySelector("#password3");
let confirmPassword3 = forgotForm.querySelector("#confirmPassword3");
let feedbackConfirm = forgotForm.querySelector(".confirmPassword_feedback");
changePasswordDiv.style.display = captchaInp.style.display = "none";

let checkEmail = () => {
    let email = forgotForm.querySelector("#email2");
    registerData = JSON.parse(localStorage.getItem("registerData"));
    if (email.value == "") {
        feedback.textContent = "This field is required";
        feedback.style.color = "red";
    }
    let checkUser = registerData?.find(x => x.email == email.value);
    let index = registerData?.findIndex(x => x.email == email.value);
    if (checkUser) {
        let captcha = Math.floor(Math.random() * (10000 - 999) + 999);
        p.innerHTML = `Enter the code: ${captcha}`;
        captchaInp.style.display = "block";
        captchaInp.addEventListener("input", () => {
            let checkCaptcha = captchaInp.value == captcha;
            if (checkCaptcha) {
                changePasswordDiv.style.display = "block"
                confirmPassword3.addEventListener("change", () => {
                    if (password3.value == confirmPassword3.value) {
                        forgotForm.querySelector("#changePassword").addEventListener("click", () => {
                            console.log(index);
                            feedbackConfirm.textContent = ""
                            registerData[index]["password"] = confirmPassword3.value;
                            localStorage.setItem("registerData", JSON.stringify(registerData));
                            Swal.fire({
                                title: "Successfully change password!",
                                icon: "success",
                            }).then(function () {
                                forgotForm.style.display = "none"
                                loginForm.style.display = "block"
                            })
                        })
                    }
                    else {
                        feedbackConfirm.textContent = "Confirm password not match with password"
                        feedbackConfirm.style.color = "red";
                    }
                })
            }
        })
    }
    else {
        feedback.textContent = "Invalid Email";
        feedback.style.color = "red";
    }
}




