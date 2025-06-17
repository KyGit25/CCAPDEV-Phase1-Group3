// Reservation functionality
function loadUpcomingReservations() {
    const container = document.getElementById('upcomingReservations');
    if (!container) return;

    // In a real app, we would filter by current user and upcoming dates
    const upcoming = sampleData.reservations.slice(0, 3); // Just show first 3 for demo
    
    if (upcoming.length === 0) {
        container.innerHTML = '<p>No upcoming reservations</p>';
        return;
    }

    let html = '';
    upcoming.forEach(res => {
        const lab = sampleData.labs.find(l => l.id === res.labId);
        html += `
            <div class="reservation-card card mb-2">
                <div class="card-body">
                    <h6>${lab.name}</h6>
                    <p class="reservation-meta mb-1">
                        Seat ${res.seatNumber} • ${res.date} ${res.startTime}-${res.endTime}
                    </p>
                    <a href="../reservation/edit.html?id=${res.id}" class="btn btn-sm btn-outline-primary">Edit</a>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function populateLabSelect() {
    const select = document.getElementById('labSelect');
    if (!select) return;

    sampleData.labs.forEach(lab => {
        const option = document.createElement('option');
        option.value = lab.id;
        option.textContent = lab.name;
        select.appendChild(option);
    });

    select.addEventListener('change', function() {
        displayLabAvailability(new Date());
    });
}

function displayLabAvailability(date) {
    const container = document.getElementById('availabilityCalendar');
    if (!container) return;

    const labId = document.getElementById('labSelect').value;
    const lab = sampleData.labs.find(l => l.id == labId);
    
    // Filter slots for this lab and date
    const slots = sampleData.slots.filter(slot => 
        slot.labId == labId && slot.date === formatDate(date)
    );

    let html = `
        <div class="calendar-nav">
            <button class="btn btn-sm btn-outline-secondary prev-day">← Previous</button>
            <h5 class="calendar-title">${lab.name} - ${formatDisplayDate(date)}</h5>
            <button class="btn btn-sm btn-outline-secondary next-day">Next →</button>
        </div>
        <table class="availability-calendar table">
            <thead>
                <tr>
                    <th>Time Slot</th>
                    <th>Available Seats</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
    `;

    slots.forEach(slot => {
        const isBooked = slot.availableSeats < lab.seats;
        const btnClass = isBooked ? 'btn-secondary disabled' : 'btn-primary';
        
        html += `
            <tr>
                <td>${slot.startTime} - ${slot.endTime}</td>
                <td>${slot.availableSeats} / ${lab.seats}</td>
                <td>
                    <a href="../reservation/create.html?lab=${labId}&date=${slot.date}&start=${slot.startTime}&end=${slot.endTime}" 
                       class="btn btn-sm ${btnClass}">
                        ${isBooked ? 'Booked' : 'Reserve'}
                    </a>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;

    // Add event listeners for navigation
    container.querySelector('.prev-day').addEventListener('click', () => {
        date.setDate(date.getDate() - 1);
        displayLabAvailability(date);
    });

    container.querySelector('.next-day').addEventListener('click', () => {
        date.setDate(date.getDate() + 1);
        displayLabAvailability(date);
    });
}

// Helper functions
function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function formatDisplayDate(date) {
    return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}
