window.onload = function() {
    // Check to see if the user's browser supports GeoLocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            alert("Latitude: " + position.coords.latitude + " " +
                  "Longitude: " + position.coords.longitude);
        });
    }
}