import { showToast, validateEmail } from './util.js';

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user && user.isLoggedIn) {
        window.location.href = 'index.html';
        return;
    }

    const loginForm = document.getElementById('login-form');
    const roleOptions = document.querySelectorAll('input[name="role"]');

    roleOptions.forEach(option => {
        option.addEventListener('change', () => {
            document.querySelectorAll('.role-option').forEach(el => {
                el.classList.remove('border-blue-500', 'bg-blue-50');
            });
            const selectedLabel = document.querySelector(`label[for="${option.id}"]`);
            if (selectedLabel) {
                selectedLabel.classList.add('border-blue-500', 'bg-blue-50');
            }
        });
    });

    document.querySelector('.role-option').classList.add('border-blue-500', 'bg-blue-50');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email-address').value;
            const password = document.getElementById('password').value;
            const role = document.querySelector('input[name="role"]:checked').value;
            const rememberMe = document.getElementById('remember-me').checked;

            if (!email || !password) {
                showToast('Please enter both email and password', 'error');
                return;
            }

            if (!validateEmail(email)) {
                showToast('Please enter a valid email address', 'error');
                return;
            }

            if (password.length < 6) {
                showToast('Password must be at least 6 characters', 'error');
                return;
            }

            authenticateUser(email, password, role, rememberMe);
        });
    }
});

function authenticateUser(email, password, role, rememberMe) {
    const submitButton = document.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="animate-pulse">Authenticating...</span>';

    setTimeout(() => {
        const validCredentials = {
            'admin@pharmamanage.com': { password: 'admin123', role: 'admin', name: 'System Admin' },
            'owner@pharmamanage.com': { password: 'owner123', role: 'owner', name: 'Store Owner' }
        };

        if (validCredentials[email] && validCredentials[email].password === password) {
            if (validCredentials[email].role === role) {
                const user = {
                    email,
                    name: validCredentials[email].name,
                    role,
                    isLoggedIn: true,
                    rememberMe
                };
                localStorage.setItem('currentUser', JSON.stringify(user));
                showToast(`Welcome back, ${user.name}!`, 'success');
                window.location.href = 'index.html';
            } else {
                showToast('Invalid role selection for this account', 'error');
            }
        } else {
            showToast('Invalid email or password', 'error');
        }

        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 1500);
}
