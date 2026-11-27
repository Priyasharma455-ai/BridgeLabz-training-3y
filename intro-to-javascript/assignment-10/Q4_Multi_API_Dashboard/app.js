const API_BASE = "http://localhost:3004";

async function fetchData(endpoint) {
  try {
    const response = await fetch(API_BASE + endpoint);
    if (!response.ok) {
      throw new Error("API request failed: " + endpoint);
    }
    return await response.json();
  } catch (error) {
    return null;
  }
}

async function loadDashboard() {
  const loading = document.getElementById("loading");
  const warning = document.getElementById("warning");

  // Promise.all starts all three API requests together.
  const [users, orders, products] = await Promise.all([
    fetchData("/users"),
    fetchData("/orders"),
    fetchData("/products")
  ]);

  if (users !== null) {
    document.getElementById("usersCount").textContent = users.length;
  }
  if (orders !== null) {
    document.getElementById("ordersCount").textContent = orders.length;
  }
  if (products !== null) {
    document.getElementById("productsCount").textContent = products.length;
  }

  // Show the required warning if even one API could not be loaded.
  warning.hidden = users !== null && orders !== null && products !== null;
  loading.hidden = true;
}

loadDashboard();
