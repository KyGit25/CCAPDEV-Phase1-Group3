// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    displayLabs();
});

// Display available labs on the home page
function displayLabs() {
    const labCardsContainer = document.getElementById('labCards');
    
    sampleData.labs.forEach(lab => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card lab-card h-100">
                <img src="assets/lab${lab.id}.jpg" class="card-img-top" alt="${lab.name}">
                <div class="card-body">
                    <h5 class="card-title">${lab.name}</h5>
                    <p class="card-text">${lab.description}</p>
                    <p class="card-text"><small class="text-muted">${lab.location}</small></p>
                </div>
                <div class="card-footer bg-white">
                    <a href="views/reservation/view.html?lab=${lab.id}" class="btn btn-primary">View Availability</a>
                </div>
            </div>
        `;
        labCardsContainer.appendChild(card);
    });
}

// Helper function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
