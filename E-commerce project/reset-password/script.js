
let loginUserData = JSON.parse(localStorage.getItem("loginEmail"));
let registerData = JSON.parse(localStorage.getItem("registerData"));
let currentPassword = document.querySelector("#currentPassword");
let changePassword = document.querySelector("#changePassword");
let newPassword = document.querySelector("#newPassword");
let feedBack = document.querySelector("#feedBackDiv");

let checkChangePassword = () => {
    let getUser = registerData?.find(x => x.email == loginUserData)
    let index = registerData?.findIndex(x => x.email == loginUserData)

    if (getUser.password != currentPassword.value) {
        feedBack.textContent = "Current password is wrong"
    }
    else {
        if (changePassword.value != "" && newPassword.value != "") {
            if (changePassword.value != newPassword.value) {
                feedBack.textContent = "Confirm password is not match with change password"
            }
            else {
                Swal.fire({
                    title: "Successfully change password!",
                    icon: "success",
                }).then(function () {
                    window.location.href = "../Home/index.html"
                    registerData[index]["password"] = newPassword.value;
                    localStorage.setItem("registerData", JSON.stringify(registerData));
                })
            }
        }
    }
}