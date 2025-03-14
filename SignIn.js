// SignIn.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting traditionally

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        // Example login validation (replace with real authentication logic)
        if (username === 'user' && password === 'password123') {
            alert('Login successful!');
            // Redirect to dashboard or another page
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password.');
        }
    });
});
