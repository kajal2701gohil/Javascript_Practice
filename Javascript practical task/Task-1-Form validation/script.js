let name1 = document.querySelector("#floatingname");
let email = document.querySelector("#floatingemail");
let password = document.querySelector("#floatingPassword");
let confirmPassword = document.querySelector("#floatingConfirmPassword");
let aerrow = document.querySelector("#flexCheckDefault");
let nameFeedback = document.querySelector(".name");
let emailFeedback = document.querySelector(".email");
let passwordFeedback = document.querySelector(".password");
let confirmPasswordFeedback = document.querySelector(".confirmPassword");
let aerrowFeedback = document.querySelector(".aerrow");


name1.addEventListener("change", (e) => {
    if (e.target.value.length < 3) {
        nameFeedback.textContent = "Name must be at least 3 characters long."
    }
    else {
        let k = /[.*+?^${}(0-9)|[\]\\%]/g;
        let d = k.test(e.target.value)
        if (d) {
            nameFeedback.textContent = "Name must not contain numbers or special characters."
        } else {
            nameFeedback.textContent = "Looks good!";
            nameFeedback.style.color = "green";
        }
    }
})
email.addEventListener("change", (e) => {

    let k = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    let d = k.test(e.target.value);
    if (!d) {

        emailFeedback.textContent = "Email must be in a valid email format (e.g., user@example.com)"
    }
    else {
        emailFeedback.textContent = "Looks good!";
        emailFeedback.style.color = "green";
    }
})

password.addEventListener("change", (e) => {
    if (e.target.value.length < 8) {
        passwordFeedback.textContent = "Password must be at least 8 characters long."
    }
    else {
        let k = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/
        let d = k.test(e.target.value);
        if (!d) {
            passwordFeedback.textContent = "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character."
        }
        else {
            passwordFeedback.textContent = "Looks good!";
            passwordFeedback.style.color = "green";
        }
    }
})

confirmPassword.addEventListener("change", (e) => {
    let k = e.target.value == password.value;
    if (!k) {
        confirmPasswordFeedback.textContent = "Confirm password not match with password"
    }
    else {
        confirmPasswordFeedback.textContent = "Looks good!";
        confirmPasswordFeedback.style.color = "green";
    }
})
aerrow.addEventListener("change", (e) => {
    if (e.target.checked == false) {

        aerrowFeedback.textContent = "You must accept the terms and condition to registration";
        aerrowFeedback.style.color = "red";
    }
    else {
        aerrowFeedback.textContent = "Looks good!";
        aerrowFeedback.style.color = "green";
    }
})
document.querySelector(".btn").addEventListener("click", (e) => {
    if (name1.value == "") {
        nameFeedback.textContent = "This field is required"
        e.preventDefault();
    }
    if (email.value == "") {
        emailFeedback.textContent = "This field is required"
        e.preventDefault();
    }
    if (password.value == "") {
        passwordFeedback.textContent = "This field is required"
        e.preventDefault();
    }
    if (confirmPassword.value == "") {
        confirmPasswordFeedback.textContent = "This field is required"
        e.preventDefault();
    }
    if (aerrow.checked == false) {
        aerrowFeedback.textContent = "You must accept the terms and condition to registration"
        e.preventDefault();
    }
    else {
        let allFeedbackArray = [];
        let allFeedback = document.querySelectorAll(".feedback");
        allFeedback.forEach(x => (x.textContent != "Looks good!") ? allFeedbackArray.push(x) : "");
        if (allFeedbackArray.length == 0) {
            Swal.fire({
                title: "Thank You for Registration!",
                text: "Congratulations your account has been successfully done.",
                icon: "success",

            }).then(function () {
                document.querySelector("form").reset();
                allFeedback.forEach(x => x.textContent = "");
            })
            e.preventDefault();
        }
        else {
            e.preventDefault();
        }
    }



});