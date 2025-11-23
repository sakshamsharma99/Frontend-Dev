const form=document.getElementById("studentForm");

const nameField=document.getElementById("name");
const emailField=document.getElementById("email");
const phoneField=document.getElementById("phone");
const passField=document.getElementById("password");

form.addEventListener("submit",e=>{
    e.preventDefault();
    let valid=true;

    const nameReg=/^[A-Za-z ]+$/;
    if(!nameReg.test(nameField.value)){
        valid=false;
        nameField.className="invalid";
        document.getElementById("nameErr").textContent="Name must contain only alphabets";
    }else{
        nameField.className="valid";
        document.getElementById("nameErr").textContent="";
    }

    const emailReg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    if(!emailReg.test(emailField.value)){
        valid=false;
        emailField.className="invalid";
        document.getElementById("emailErr").textContent="Invalid email format";
    }else{
        emailField.className="valid";
        document.getElementById("emailErr").textContent="";
    }

    const phoneReg=/^[0-9]{10}$/;
    if(!phoneReg.test(phoneField.value)){
        valid=false;
        phoneField.className="invalid";
        document.getElementById("phoneErr").textContent="Phone must be 10 digits";
    }else{
        phoneField.className="valid";
        document.getElementById("phoneErr").textContent="";
    }

    const passReg=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#]).+$/;
    if(!passReg.test(passField.value)){
        valid=false;
        passField.className="invalid";
        document.getElementById("passErr").textContent="Password must contain 1 uppercase, 1 number, 1 special character";
    }else{
        passField.className="valid";
        document.getElementById("passErr").textContent="";
    }

    if(valid) alert("Registration Successful!");
});