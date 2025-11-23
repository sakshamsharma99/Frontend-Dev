let user = { name: "John", email: "john@mail.com", age: 21 };

document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

function showUser(){
    document.getElementById("details").innerHTML =
        `Name: ${user.name}<br>Email: ${user.email}<br>Age: ${user.age}`;
}

showUser();

document.getElementById("userForm").addEventListener("submit", e=>{
    e.preventDefault();
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = document.getElementById("age").value;
    showUser();
});