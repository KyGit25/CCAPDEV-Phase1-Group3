document.addEventListener("DOMContentLoaded", function () {
  const nameEl = document.getElementById("userName");
  const descEl = document.getElementById("userDescription");
  const resTable = document.getElementById("profileReservations");

  const user = [
  {
    name: "John Cruz",
    email: "john.cruz@dlsu.edu.ph",
    description: "Computer Science student interested in systems development."
  },

  {
    name: "Maria Santos",
    email: "maria.santos@dlsu.edu.ph",
    description: "Computer Science student interested in systems development."
  },

  {
    name: "Daniel Reyes",
    email: "daniel.reyes@dlsu.edu.ph",
    description: "Computer Science student interested in systems development."
  },

    {
    name: "Anna Dela Cruz",
    email: "anna.delacruz@dlsu.edu.ph",
    description: "Computer Science student interested in systems development."
  },

  {
    name: "Lucas Tan",
    email: "lucas.tan@dlsu.edu.ph",
    description: "Computer Science student interested in systems development."
  }
  
];

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

  nameEl.textContent = user.name;
  descEl.textContent = user.description;

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
