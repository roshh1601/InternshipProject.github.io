// Function to validate email format
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const form = document.querySelector('form');

    // Get input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Get elements to display validation messages
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    // Validate name
    if (name === '') {
        nameError.textContent = 'Please enter your name.';
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }

    // Validate email format
    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }

    // Validate username format
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
        usernameError.textContent = 'Username can only contain letters and numbers.';
        usernameError.style.display = 'block';
    } else {
        usernameError.style.display = 'none';
    }

    // Validate password length
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }

    // If all validations pass, submit the form
    if (name !== '' && validateEmail(email) && usernameRegex.test(username) && password.length >= 6) {
        // Your form submission logic here
        alert('Form submitted successfully!');
        window.location.href = 'profile.html';
        form.reset(); // Reset the form
    }
}

// Add event listener to form submission
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


