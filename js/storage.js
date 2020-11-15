window.onload = function() {
    // Check for LocalStorage support
    if (localStorage) {
        // Get the form
        var form = document.getElementById("bookingForm");

        // Event listener for when the bookings form is submitted
        form.addEventListener("submit", function(e) {
            saveData(form);
        });
    }
}

// Save the form data in LocalStorage
function saveData() {
    // Fetch the input elements
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");

    // Store the values
    localStorage.setItem("name", name.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
}

// Attempt to populate the form using data stored in localStorage
function populateForm() {
    // Fetch the input elements
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");

    // Retrieve the saved data and update the values of the form
    // fields
    if (localStorage.getItem("name") != null) {
        name.value = localStorage.getItem("name");
    }

    if (localStorage.getItem("phone") != null) {
        phone.value = localStorage.getItem("phone");
    }
}