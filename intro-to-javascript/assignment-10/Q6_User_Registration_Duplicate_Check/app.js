const API_URL = "http://localhost:3006/users";
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const userList = document.getElementById("userList");

async function loadUsers() {
  try {
    const response = await axios.get(API_URL);
    userList.innerHTML = "";
    response.data.forEach(function (user) {
      const item = document.createElement("li");
      item.textContent = user.name + " - " + user.email;
      userList.appendChild(item);
    });
  } catch (error) {
    message.textContent = "Could not load users. Check JSON Server on port 3006.";
    message.className = "error";
  }
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();

  if (!name || !email) {
    message.textContent = "Please enter both name and email.";
    message.className = "error";
    return;
  }

  message.textContent = "Checking email...";
  message.className = "info";

  try {
    const checkResponse = await axios.get(API_URL, {
      params: { email: email }
    });

    if (checkResponse.data.length > 0) {
      message.textContent = "Email already registered.";
      message.className = "error";
      return;
    }

    await axios.post(API_URL, { name: name, email: email });
    message.textContent = "Registration successful!";
    message.className = "success";
    form.reset();
    loadUsers();
  } catch (error) {
    message.textContent = "Registration failed. Please check JSON Server and try again.";
    message.className = "error";
  }
});

loadUsers();