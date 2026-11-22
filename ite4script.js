// ite4script.js – Login Page Functionality

(function () {
    'use strict';

    // --- DOM Elements ---
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');
    const loginBtn = document.getElementById('loginBtn');
    const btnLoader = document.getElementById('btnLoader');
    const messageDiv = document.getElementById('message');
    const eyeToggle = document.getElementById('eyeToggle');
    const openEye = document.querySelector('.eye-icon.open');
    const closedEye = document.querySelector('.eye-icon.closed');

    // --- Error message elements ---
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // --- Show / Hide Password ---
    if (eyeToggle && openEye && closedEye) {
        eyeToggle.addEventListener('click', function () {
            // Toggle input type
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';

            // Toggle eye icons
            if (isPassword) {
                openEye.style.display = 'block';
                closedEye.style.display = 'none';
            } else {
                openEye.style.display = 'none';
                closedEye.style.display = 'block';
            }
        });
    }

    // --- Form Validation on Submit ---
    function validateForm() {
        let isValid = true;
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Username/Email validation
        if (usernameValue === '') {
            usernameError.textContent = 'Please enter your username or email.';
            usernameInput.classList.add('error');
            isValid = false;
        } else {
            usernameError.textContent = '';
            usernameInput.classList.remove('error');
        }

        // Password validation
        if (passwordValue === '') {
            passwordError.textContent = 'Please enter your password.';
            passwordInput.classList.add('error');
            isValid = false;
        } else {
            passwordError.textContent = '';
            passwordInput.classList.remove('error');
        }

        return isValid;
    }

    // --- Show Message ---
    function showMessage(text, isSuccess) {
        messageDiv.textContent = text;
        messageDiv.className = isSuccess ? 'success' : 'error';
        messageDiv.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }

    // --- Login Button Loading State ---
    function setLoading(isLoading) {
        if (isLoading) {
            loginBtn.classList.add('loading');
            btnLoader.style.opacity = '1';
            btnLoader.style.visibility = 'visible';
            loginBtn.disabled = true;
        } else {
            loginBtn.classList.remove('loading');
            btnLoader.style.opacity = '0';
            btnLoader.style.visibility = 'hidden';
            loginBtn.disabled = false;
        }
    }

    // --- Form Submit Handler ---
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Hide previous messages
        messageDiv.style.display = 'none';

        // Validate
        if (validateForm()) {
            // Show loading animation
            setLoading(true);

            // Simulate async login (replace with real API call)
            setTimeout(() => {
                setLoading(false);
                showMessage('Login successful! Welcome back.', true);

                // Reset form after a moment
                setTimeout(() => {
                    loginForm.reset();
                    usernameInput.classList.remove('error');
                    passwordInput.classList.remove('error');
                }, 1500);
            }, 2000); // 2s simulated delay
        }
    });

    // --- Optional: Remove error class when user starts typing ---
    usernameInput.addEventListener('input', function () {
        if (usernameInput.value.trim() !== '') {
            usernameInput.classList.remove('error');
        }
    });

    passwordInput.addEventListener('input', function () {
        if (passwordInput.value.trim() !== '') {
            passwordInput.classList.remove('error');
        }
    });
})();