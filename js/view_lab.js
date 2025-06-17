// view_lab.js

document.addEventListener("DOMContentLoaded", function () {
  const labSelect = document.getElementById("labSelect");
  const container = document.getElementById("availabilityContainer");

  const seatsPerLab = 35;
  const seatData = {
    "Lab A": [],
    "Lab B": [],
    "Lab C": []
  };

  // Generate sample data
  const sampleNames = [
    { name: "John Cruz", id: "john" },
    { name: "Maria Santos", id: "maria" },
    { name: "Daniel Reyes", id: "daniel" }
  ];

  function generateSeats(labName) {
    if (seatData[labName].length > 0) return seatData[labName];

    for (let i = 1; i <= seatsPerLab; i++) {
      const isTaken = Math.random() < 0.4;
      const reserved = isTaken
        ? {
            anonymous: Math.random() < 0.5,
            user: sampleNames[Math.floor(Math.random() * sampleNames.length)]
          }
        : null;

      seatData[labName].push({
        seat: `S${String(i).padStart(2, "0")}`,
        reserved: reserved
      });
    }

    return seatData[labName];
  }

  function renderSeats(labName) {
    const seats = generateSeats(labName);
    container.innerHTML = "";

    seats.forEach(seatObj => {
      const card = document.createElement("div");
      card.className = "col";

      const reserved = seatObj.reserved;
      const isReserved = !!reserved;

      let content = `<div class="card h-100 ${isReserved ? 'border-danger' : 'border-success'}">
        <div class="card-body text-center">
          <h5 class="card-title">${seatObj.seat}</h5>`;

      if (isReserved) {
        if (reserved.anonymous) {
          content += `<p class="card-text text-muted">Reserved anonymously</p>`;
        } else {
          content += `<p class="card-text">Reserved by 
                      <a href="profile.html?user=${reserved.user.id}">
                        ${reserved.user.name}
                      </a></p>`;
        }
      } else {
        content += `<p class="card-text text-success">Available</p>`;
      }

      content += `</div></div>`;
      card.innerHTML = content;
      container.appendChild(card);
    });
  }

  labSelect.addEventListener("change", function () {
    renderSeats(this.value);
  });

  // Initial render
  renderSeats(labSelect.value);
});
