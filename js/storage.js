window.onload = function() {
    // Check for LocalStorage support
    if (localStorage) {
        // Get the form
        var form = document.getElementById("bookingForm");

        // Event listener for when the bookings form is submitted
        form.addEventListener("", function(e) {
            saveData(form);
        });
    }
}