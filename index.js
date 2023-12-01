// Array to store registered people
let registeredQueue = [];

// Array to store vaccinated people
let vaccinatedQueue = [];

// Function to create table rows for registered people
function createRow(name) {
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.textContent = name;
  row.appendChild(cell);
  return row;
}

// Function to handle the registration process
function register() {
  const name = document.getElementById("name").value;
  registeredQueue.push(name);

  const registeredTable = document.getElementById("registered-people");
  registeredTable.appendChild(createRow(name));
}

// Function to start the vaccination process
function startVaccination() {
  const interval = setInterval(() => {
    const firstOnQueue = registeredQueue.shift();
    if (firstOnQueue) {
      vaccinatedQueue.push(firstOnQueue);

      const registeredTable = document.getElementById("registered-people");
      const vaccinatedTable = document.getElementById("vaccinated-people");

      // Move person from registered to vaccinated table
      registeredTable.removeChild(registeredTable.firstChild);
      vaccinatedTable.appendChild(createRow(firstOnQueue));
    } else {
      clearInterval(interval);

      // Check if all people are vaccinated
      if (registeredQueue.length === 0) {
        const vaccinatedTable = document.getElementById("vaccinated-people");
        const row = document.createElement("tr");
        // const cell = document.createElement("td");
        // cell.textContent = "All vaccinated!";
        alert("All vaccinated Done!! ")
        row.appendChild(cell);
        vaccinatedTable.appendChild(row);
      }
    }
  }, 2000);
}

// Event listeners for Register and Start Vaccination buttons
document.getElementById("register-btn").addEventListener("click", register);
document.getElementById("start-vaccination-btn").addEventListener("click", startVaccination);
