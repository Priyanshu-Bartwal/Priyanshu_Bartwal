const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
});

let mailid = document.getElementById("mailid");
let password = document.getElementById("password");

let btnLogin = document.getElementById("btnLogin")

btnLogin.addEventListener('click',()=>{
    if ((mailid.value == "bartwalpriyanshu00@gmail.com") && (password.value == "1234")) {
        window.location.href = "./index.html";
        console.log("good");
    }
    else{
        alert("invalid Username or Password")
    }
});
