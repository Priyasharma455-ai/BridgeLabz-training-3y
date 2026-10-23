// Q8: Dynamic Object Updater
const user = { name: "John", email: "john@mail.com", age: 21 };
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const output = document.getElementById("output");

function displayUser() {
    output.textContent = JSON.stringify(user, null, 2);
}
nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;

document.getElementById("userForm").addEventListener("submit", event => {
    event.preventDefault();
    user.name = nameInput.value.trim();
    user.email = emailInput.value.trim();
    user.age = Number(ageInput.value);
    displayUser();
});
displayUser();
