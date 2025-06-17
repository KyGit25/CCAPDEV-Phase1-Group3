// technician.js

document.addEventListener("DOMContentLoaded", function () {
  const technicianTable = document.getElementById("technicianTable");
  const logoutBtn = document.getElementById("logoutBtn");

  // Sample reservations
  const reservations = [
    {
      student: "John Cruz",
      lab: "Lab A",
      seat: "S03",
      date: "2025-06-18",
      time: "09:00 - 09:30 AM"
    },
    {
      student: "Maria Santos",
      lab: "Lab B",
      seat: "S11",
      date: "2025-06-18",
      time: "01:30 - 02:00 PM"
    },
    {
      student: "Daniel Reyes",
      lab: "Lab C",
      seat: "S07",
      date: "2025-06-19",
      time: "03:00 - 03:30 PM"
    }
  ];

  function renderReservations() {
    technicianTable.innerHTML = "";

    reservations.forEach((res, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${res.student}</td>
        <td>${res.lab}</td>
        <td>${res.seat}</td>
        <td>${res.date}</td>
        <td>${res.time}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editAsTech(${index})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="removeNoShow(${index})">Remove</button>
        </td>
      `;

      technicianTable.appendChild(row);
    });
  }

  window.removeNoShow = function (index) {
    alert(`Reservation #${index + 1} marked as no-show and removed (simulated).`);
    // You could remove the item here too if desired:
    // reservations.splice(index, 1);
    // renderReservations();
  };

  window.editAsTech = function (index) {
    alert(`Edit reservation #${index + 1} as technician (simulated).`);
  };

  window.reserveForWalkIn = function () {
    alert("Walk-in reservation form would open (simulated).");
  };

  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("rememberedUser");
    alert("Logged out successfully.");
    window.location.href = "index.html";
  });

  renderReservations();
});
