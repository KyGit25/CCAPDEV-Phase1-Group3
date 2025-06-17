// search.js

document.addEventListener("DOMContentLoaded", function () {
  const slotForm = document.getElementById("slotSearchForm");
  const userForm = document.getElementById("userSearchForm");
  const slotResults = document.getElementById("slotResults");
  const userResults = document.getElementById("userResults");

  // Hardcoded available slots (for simplicity)
  const availableSlots = [
    { lab: "Lab A", date: "2025-06-18", time: "08:00", seat: "S05" },
    { lab: "Lab B", date: "2025-06-19", time: "10:30", seat: "S12" },
    { lab: "Lab C", date: "2025-06-20", time: "09:00", seat: "S27" }
  ];

  // Hardcoded users
  const users = [
    { name: "John Cruz", id: "john" },
    { name: "Maria Santos", id: "maria" },
    { name: "Daniel Reyes", id: "daniel" },
    { name: "Anna Dela Cruz", id: "anna" },
    { name: "Lucas Tan", id: "lucas" }
  ];

  slotForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const lab = document.getElementById("searchLab").value;
    const date = document.getElementById("searchDate").value;
    const time = document.getElementById("searchTime").value;

    const results = availableSlots.filter(slot =>
      slot.lab === lab &&
      slot.date === date &&
      slot.time === time
    );

    slotResults.innerHTML = results.length
      ? `<ul class="list-group">${results.map(r =>
          `<li class="list-group-item">Seat ${r.seat} is available in ${r.lab} at ${r.time}</li>`).join("")}</ul>`
      : `<p class="text-danger mt-2">No available slots found.</p>`;
  });

  userForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("searchUser").value.trim().toLowerCase();

    const matches = users.filter(user =>
      user.name.toLowerCase().includes(query)
    );

    userResults.innerHTML = matches.length
      ? `<ul class="list-group">${matches.map(user =>
          `<li class="list-group-item">
             <a href="profile.html?user=${user.id}">${user.name}</a>
           </li>`).join("")}</ul>`
      : `<p class="text-danger mt-2">No matching users found.</p>`;
  });
});
