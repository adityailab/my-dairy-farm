document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Simple form validation (example)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        // Here you would typically send the form data to a server or API
        // For this example, we'll just clear the form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
