document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const showForgotPasswordLink = document.getElementById('forgot-password-link');
    const showLoginFromForgotLink = document.getElementById('show-login-from-forgot');

    showRegisterLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    showForgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.classList.remove('active');
        forgotPasswordForm.classList.add('active');
    });

    showLoginFromForgotLink.addEventListener('click', function(event) {
        event.preventDefault();
        forgotPasswordForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    // Initialize the login form as active
    loginForm.classList.add('active');
});
