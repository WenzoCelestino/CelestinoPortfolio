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
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
    
    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
            
            // Close mobile menu if open
            document.querySelector('.nav-menu').classList.remove('active');
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

// Console greeting
console.log('%c✨ Welcome to my portfolio!', 'font-size: 20px; font-weight: bold; color: #00e5ff;');
console.log('%cBuilt with passion by Laurenz Christian M. Celestino', 'color: #9090a0;');

