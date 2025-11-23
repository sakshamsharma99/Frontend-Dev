const form=document.getElementById("bookingForm");
const nameField=document.getElementById("name");
const emailField=document.getElementById("email");
const seatsField=document.getElementById("seats");

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

    const seatVal=parseInt(seatsField.value);
    if(seatVal<1 || seatVal>10){
        valid=false;
        seatsField.className="invalid";
        document.getElementById("seatsErr").textContent="Seats must be between 1 and 10";
    }else{
        seatsField.className="valid";
        document.getElementById("seatsErr").textContent="";
    }

    if(valid){
        const booking={
            name:nameField.value,
            email:emailField.value,
            seats:seatVal
        };
        document.getElementById("details").innerHTML=
            `Name: ${booking.name}<br>Email: ${booking.email}<br>Seats: ${booking.seats}`;
    }
});