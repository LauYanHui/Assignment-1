document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var email = document.getElementById('email').value;
    alert('Thank you for subscribing, ' + email + '!');
    
});