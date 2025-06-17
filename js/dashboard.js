// dashboard.js

document.addEventListener("DOMContentLoaded", function () {
  const reservationList = document.getElementById("reservationList");
  const logoutBtn = document.getElementById("logoutBtn");

  // Sample reservations (normally fetched from DB)
  const sampleReservations = [
    {
      lab: "Lab A",
      seat: "S01",
      date: "2025-06-18",
      time: "10:00 - 10:30 AM",
      anonymous: false
    },
    {
      lab: "Lab B",
      seat: "S12",
      date: "2025-06-19",
      time: "2:00 - 2:30 PM",
      anonymous: true
    },
    {
      lab: "Lab C",
      seat: "S05",
      date: "2025-06-20",
      time: "11:00 - 11:30 AM",
      anonymous: false
    }
  ];

  function renderReservations() {
    reservationList.innerHTML = "";

    sampleReservations.forEach((res, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${res.lab}</td>
        <td>${res.seat}</td>
        <td>${res.date}</td>
        <td>${res.time}</td>
        <td>${res.anonymous ? "Yes" : "No"}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editReservation(${index})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteReservation(${index})">Delete</button>
        </td>
      `;

      reservationList.appendChild(row);
    });
  }

  window.editReservation = function (index) {
    alert(`Edit feature for reservation #${index + 1} (mock)`);
  };

  window.deleteReservation = function (index) {
    alert(`Delete feature for reservation #${index + 1} (mock)`);
  };

  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("rememberedUser");
    alert("Logged out successfully.");
    window.location.href = "index.html";
  });

  renderReservations();
});
