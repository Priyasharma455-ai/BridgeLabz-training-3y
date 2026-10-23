// Q2: Student Form Validator (Forms + RegExp)
const form = document.getElementById("studentForm");
const patterns = {
    name: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};
const messages = {
    name: "Name must contain alphabets only.",
    email: "Enter a valid email, e.g. example@domain.com.",
    phone: "Phone number must contain exactly 10 digits.",
    password: "Password needs at least one uppercase letter, one number, and one special character."
};
function validateField(field) {
    const input = document.getElementById(field);
    const valid = patterns[field].test(input.value.trim());
    input.classList.toggle("valid", valid);
    input.classList.toggle("invalid", !valid);
    document.getElementById(field + "Error").textContent = valid ? "" : messages[field];
    return valid;
}
["name", "email", "phone", "password"].forEach(field => {
    document.getElementById(field).addEventListener("input", () => validateField(field));
});
form.addEventListener("submit", event => {
    event.preventDefault();
    const valid = ["name", "email", "phone", "password"].map(validateField).every(Boolean);
    document.getElementById("result").textContent = valid ? "Registration successful!" : "Please correct the highlighted fields.";
});
