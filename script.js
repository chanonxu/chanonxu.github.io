document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');

    // Function to handle sidebar toggle
    const toggleSidebar = () => {
        const isCollapsed = sidebar.classList.toggle('collapsed');
        localStorage.setItem('sidebar-collapsed', isCollapsed);
    };

    // Check for saved state in localStorage
    if (localStorage.getItem('sidebar-collapsed') === 'true') {
        sidebar.classList.add('collapsed');
    }

    // Event listener for the toggle button
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    // --- Set active link in sidebar based on current page ---
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    const currentPath = window.location.pathname;

    sidebarLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Handle the root path case where '/' should match '/index.html' or just '/'
        if (linkPath === currentPath || (linkPath === '/' && currentPath.endsWith('/index.html'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});