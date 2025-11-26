// ═══════════════════════════════════════════════════════════════
//  LAURENZ CELESTINO - OJT PORTFOLIO
//  Interactive JavaScript
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initMobileMenu();
    initFormValidation();
});

// Navigation Active State
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Function to update active nav link
    function updateActiveNav() {
        let current = '';
        const scrollPosition = window.scrollY + 150; // Offset for navbar height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // If at the very top, set home as active
        if (window.scrollY < 100) {
            current = 'home';
        }
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Update on page load
    updateActiveNav();
    
    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Update active state after scroll
                setTimeout(() => {
                    updateActiveNav();
                }, 100);
            }
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
}

// Scroll Reveal Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.skill-card, .work-card, .contact-item, .info-card, .resume-card, .internship-card, .detail-section'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
}

// Form Validation
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            const inputs = form.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ec4899';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    }
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 8, 0.95)';
    } else {
        navbar.style.background = 'rgba(5, 5, 8, 0.85)';
    }
});

// Resume Modal Functions
function openResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeResumeModal();
    }
});

// Console greeting
console.log('%c✨ Welcome to my portfolio!', 'font-size: 20px; font-weight: bold; color: #00e5ff;');
console.log('%cBuilt with passion by Laurenz Christian M. Celestino', 'color: #9090a0;');

