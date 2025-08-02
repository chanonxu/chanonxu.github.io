// Apple-inspired JavaScript for smooth interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll reveal effect for sections
    const revealElements = document.querySelectorAll('section');
    
    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('slide-in');
            }
        });
    }

    // Navigation active state management
    const setActiveLink = () => {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header background blur effect on scroll
    const header = document.querySelector('.header');
    function updateHeaderOnScroll() {
        const scrolled = window.pageYOffset;
        if (scrolled > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    }

    // Event listeners
    window.addEventListener('scroll', () => {
        revealOnScroll();
        updateHeaderOnScroll();
    });

    // Initial setup
    setActiveLink();
    revealOnScroll();

    // Enhanced card hover effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Mobile navigation handling (if needed for future mobile menu)
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth <= 768) {
        // Add mobile-specific interactions here if needed
    }

    // Authentication form tab switching (for account.html)
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginTab && registerTab && loginForm && registerForm) {
        loginTab.addEventListener('click', function() {
            // Switch to login tab
            loginTab.style.background = 'var(--color-accent)';
            loginTab.style.color = 'white';
            registerTab.style.background = 'transparent';
            registerTab.style.color = 'var(--color-secondary)';
            
            // Show login form, hide register form
            loginForm.style.display = 'flex';
            registerForm.style.display = 'none';
        });

        registerTab.addEventListener('click', function() {
            // Switch to register tab
            registerTab.style.background = 'var(--color-accent)';
            registerTab.style.color = 'white';
            loginTab.style.background = 'transparent';
            loginTab.style.color = 'var(--color-secondary)';
            
            // Show register form, hide login form
            registerForm.style.display = 'flex';
            loginForm.style.display = 'none';
        });

        // Form validation and submission
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Add login logic here
            console.log('Login attempt:', { email, password });
            alert('Login functionality would be implemented here');
        });

        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Add registration logic here
            console.log('Registration attempt:', { name, email, password });
            alert('Registration functionality would be implemented here');
        });
    }

});