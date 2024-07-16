let name1 = document.querySelector("#floatingname");
let email = document.querySelector("#floatingemail");
let password = document.querySelector("#floatingPassword");
let confirmPassword = document.querySelector("#floatingConfirmPassword");
let arrow = document.querySelector("#flexCheckDefault");
let nameFeedback = document.querySelector(".name");
let emailFeedback = document.querySelector(".email");
let passwordFeedback = document.querySelector(".password");
let confirmPasswordFeedback = document.querySelector(".confirmPassword");
let correctArrowFeedback = document.querySelector(".correctArrow");


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
arrow.addEventListener("change", (e) => {
    if (e.target.checked == false) {
        correctArrowFeedback.textContent = "You must accept the terms and condition to registration";
        correctArrowFeedback.style.color = "red";
    }
    else {
        correctArrowFeedback.textContent = "Looks good!";
        correctArrowFeedback.style.color = "green";
    }
})

document.querySelector("form").addEventListener("change", () => {
    let allFeedbackArray = [];
    let allFeedback = document.querySelectorAll(".feedback");
    allFeedback.forEach(x => (x.textContent != "Looks good!") ? allFeedbackArray.push(x) : "");
    if (allFeedbackArray.length == 0) {
        document.querySelector(".btn").removeAttribute("disabled");
        document.querySelector(".btn").addEventListener("click", (e) => {
            Swal.fire({
                title: "Thank You for Registration!",
                text: "Congratulations your account has been successfully done.",
                icon: "success",
            }).then(function () {
                document.querySelector("form").submit();
                allFeedback.forEach(x => x.textContent = "");
            })
        })
    }
    else {
        document.querySelector(".btn").setAttribute("disabled", true);
    }
})

