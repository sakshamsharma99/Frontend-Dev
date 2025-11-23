const form=document.getElementById("loginForm");
const usernameField=document.getElementById("username");
const passwordField=document.getElementById("password");

form.addEventListener("submit",e=>{
    e.preventDefault();
    let valid=true;

    const userReg=/.{5,}/;
    if(!userReg.test(usernameField.value)){
        valid=false;
        usernameField.className="invalid";
        document.getElementById("userErr").textContent="Username must be at least 5 characters";
    }else{
        usernameField.className="valid";
        document.getElementById("userErr").textContent="";
    }

    const passReg=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&#]).{8,}$/;
    if(!passReg.test(passwordField.value)){
        valid=false;
        passwordField.className="invalid";
        document.getElementById("passErr").textContent=
            "Password must be ≥8 chars and include number, uppercase, lowercase & special char";
    }else{
        passwordField.className="valid";
        document.getElementById("passErr").textContent="";
    }

    if(valid){
        document.getElementById("message").textContent="Login Successful!";
    }else{
        document.getElementById("message").textContent="";
    }
});
