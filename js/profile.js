// profile.js

document.addEventListener("DOMContentLoaded", function () {
  const nameEl = document.getElementById("userName");
  const descEl = document.getElementById("userDescription");
  const resTable = document.getElementById("profileReservations");

  // Sample user data
  const user = {
    name: "John Cruz",
    email: "john.cruz@dlsu.edu.ph",
    description: "Computer Science student interested in systems development."
  };

  // Sample reservations
  const reservations = [
    {
      lab: "Lab A",
      seat: "S01",
      date: "2025-06-18",
      time: "08:00 - 08:30 AM"
    },
    {
      lab: "Lab B",
      seat: "S22",
      date: "2025-06-19",
      time: "10:30 - 11:00 AM"
    }
  ];

  // Set profile info
  nameEl.textContent = user.name;
  descEl.textContent = user.description;

  // Render reservations
  reservations.forEach(res => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${res.lab}</td>
      <td>${res.seat}</td>
      <td>${res.date}</td>
      <td>${res.time}</td>
    `;

    resTable.appendChild(row);
  });
});
