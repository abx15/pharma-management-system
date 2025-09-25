import { showToast } from './util.js';

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || !user.isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }

    showToast(`Welcome back, ${user.name}!`, 'success');
    initializeDashboard(user);
});

function initializeDashboard(user) {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
        });
    }

    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.getElementById('user-menu');

    if (userMenuButton && userMenu) {
        userMenuButton.addEventListener('click', () => {
            userMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!userMenuButton.contains(e.target) && !userMenu.contains(e.target)) {
                userMenu.classList.add('hidden');
            }
        });
    }

    const logoutButton = document.querySelector('[href="#"]');
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        });
    }

    if (user.role === 'owner') {
        const adminOnlyElements = document.querySelectorAll('.admin-only');
        adminOnlyElements.forEach(el => el.style.display = 'none');

        const userDisplay = document.querySelector('#user-menu-button span');
        if (userDisplay) userDisplay.textContent = 'Store Owner';

        const userAvatar = document.querySelector('#user-menu-button div');
        if (userAvatar) userAvatar.textContent = 'S';
    }

    showToast('Dashboard initialized', 'success');
}

export { showToast };
