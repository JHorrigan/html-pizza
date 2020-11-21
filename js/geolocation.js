window.onload = function() {
    // Check to see if the user's browser supports GeoLocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            alert("Latitude: " + position.coords.latitude + " " +
                  "Longitude: " + position.coords.longitude);
        });
    }
}

// Find the restaurant that is nearest to the user's location
function findNearest(lat, lon) {
    // Calculate the distances
    var d1 = haversine(lat, lon, 40.755018, -73.992556); // 310 West 38th Street
    var d2 = haversine(lat, lon, 40.791121, -73.973971); // 2450 Broadway
    var d3 = haversine(lat, lon, 40.757498, -73.986654); // 200 West 44th Street
    // Add text to the distance labels
    document.getElementById("location1Distance").textContent = "Distance: " + d1 + " miles";
    document.getElementById("location2Distance").textContent = "Distance: " + d2 + " miles";
    document.getElementById("location3Distance").textContent = "Distance: " + d3 + " miles";
}