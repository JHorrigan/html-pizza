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
}