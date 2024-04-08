window.onload = function() {
    // Initialize the map
    const map = L.map('map').setView([-33.705551541748136, 151.20761421821845], 11);

    // Set up the OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
};
