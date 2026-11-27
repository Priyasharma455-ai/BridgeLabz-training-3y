const API_URL = "http://localhost:3002/employees";
const employeeList = document.getElementById("employeeList");
const message = document.getElementById("message");

function renderEmployees(employees) {
  employeeList.innerHTML = "";

  employees.forEach(function (employee) {
    const row = document.createElement("div");
    row.className = "list-row";

    const name = document.createElement("strong");
    name.textContent = employee.name;

    const status = document.createElement("span");
    status.textContent = employee.status.toUpperCase();
    status.className = employee.status === "active" ? "status active" : "status inactive";

    const toggle = document.createElement("button");
    toggle.textContent = employee.status === "active" ? "Set Inactive" : "Set Active";
    toggle.addEventListener("click", function () {
      updateStatus(employee, status, toggle);
    });

    row.append(name, status, toggle);
    employeeList.appendChild(row);
  });
}

function loadEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      message.textContent = "";
      renderEmployees(JSON.parse(xhr.responseText));
    } else {
      message.textContent = "Could not load employees. Check JSON Server on port 3002.";
      message.className = "error";
    }
  };
  xhr.onerror = function () {
    message.textContent = "Network error while loading employees.";
    message.className = "error";
  };
  xhr.send();
}

function updateStatus(employee, statusElement, button) {
  const oldStatus = employee.status;
  const newStatus = oldStatus === "active" ? "inactive" : "active";

  // Optimistically update the UI first.
  employee.status = newStatus;
  statusElement.textContent = newStatus.toUpperCase();
  statusElement.className = newStatus === "active" ? "status active" : "status inactive";
  button.textContent = newStatus === "active" ? "Set Inactive" : "Set Active";
  button.disabled = true;
  message.textContent = "Updating status...";

  const xhr = new XMLHttpRequest();
  xhr.open("PATCH", API_URL + "/" + employee.id);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    button.disabled = false;
    if (xhr.status >= 200 && xhr.status < 300) {
      message.textContent = "Status updated successfully.";
      message.className = "success";
    } else {
      revertStatus(employee, oldStatus, statusElement, button);
      message.textContent = "Update failed. The old status has been restored.";
      message.className = "error";
    }
  };
  xhr.onerror = function () {
    button.disabled = false;
    revertStatus(employee, oldStatus, statusElement, button);
    message.textContent = "Network error. The old status has been restored.";
    message.className = "error";
  };
  xhr.send(JSON.stringify({ status: newStatus }));
}

function revertStatus(employee, oldStatus, statusElement, button) {
  employee.status = oldStatus;
  statusElement.textContent = oldStatus.toUpperCase();
  statusElement.className = oldStatus === "active" ? "status active" : "status inactive";
  button.textContent = oldStatus === "active" ? "Set Inactive" : "Set Active";
}

loadEmployees();