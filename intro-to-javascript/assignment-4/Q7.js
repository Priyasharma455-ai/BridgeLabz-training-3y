// Q7: Login Form Validation using RegExp
document.getElementById("loginForm").addEventListener("submit", event => {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errors = [];
    if (username.length < 5) errors.push("Username must be at least 5 characters.");
    if (password.length < 8) errors.push("Password must be at least 8 characters.");
    if (!/[0-9]/.test(password)) errors.push("Password must contain a number.");
    if (!/[A-Z]/.test(password)) errors.push("Password must contain an uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("Password must contain a lowercase letter.");
    if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password must contain a special character.");
    const message = document.getElementById("message");
    message.style.color = errors.length ? "red" : "green";
    message.textContent = errors.length ? errors.join("\n") : "Login form validation successful!";
});
