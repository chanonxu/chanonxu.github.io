document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');

    // Function to set the active navigation link
    const setActiveLink = () => {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.sidebar-nav a');

        navLinks.forEach(link => {
            link.classList.remove('active'); // Reset all links first
            const linkPath = link.getAttribute('href');

            // Handle root path ('/')
            if (currentPath.endsWith('/') && linkPath === '/') {
                link.classList.add('active');
            }
            // Handle other paths, ensuring it's not just the root
            else if (linkPath !== '/' && currentPath.endsWith(linkPath)) {
                link.classList.add('active');
            }
        });
    };

    if (sidebar && sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            // Use innerWidth to check viewport size, matching CSS @media query
            if (window.innerWidth <= 768) {
                // On mobile, toggle the '.open' class for the overlay menu
                sidebar.classList.toggle('open');
            } else {
                // On desktop, toggle the '.collapsed' class for the compact sidebar
                sidebar.classList.toggle('collapsed');
            }
        });

        // Add a listener to handle window resizing to prevent inconsistent states
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                sidebar.classList.remove('open');
            }
        });
    }

    // Set the active link on page load
    setActiveLink();
});