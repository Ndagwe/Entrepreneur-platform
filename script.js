// Handle course search button click
document.querySelector('.search-bar button').addEventListener('click', function() {
    const course = document.querySelector('.search-bar select').value;

    if (course === "Choose a Course") {
        alert("Please select a course.");
    } else {
        alert(`Searching for ${course} courses...`);
    }
});

// Handle newsletter subscription
document.querySelector('.newsletter button').addEventListener('click', function() {
    const emailInput = document.querySelector('.newsletter input[type="email"]');
    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter your email address.");
    } else {
        alert(`Thank you for subscribing with the email: ${email}`);
        emailInput.value = "";
    }
});



