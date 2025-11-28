// ═══════════════════════════════════════════════════════════════
//  LAURENZ CELESTINO - OJT PORTFOLIO
//  Interactive JavaScript
// ═══════════════════════════════════════════════════════════════

// Prevent browser from restoring scroll position
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Scroll to home page on page load/refresh
function scrollToHomeOnLoad() {
    // Scroll to top first
    window.scrollTo(0, 0);
    
    // Then scroll to home section
    setTimeout(() => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            const homeTop = homeSection.offsetTop;
            window.scrollTo({ top: homeTop, behavior: 'instant' });
        }
    }, 50);
    
    // Set home as active nav
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#home') {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu if open
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    if (navToggle) {
        navToggle.classList.remove('active');
    }
}

// Handle page load and refresh
let scrollTimeout = null;

function handlePageLoad() {
    // Clear any existing timeout
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    // Set new timeout to scroll to home
    scrollTimeout = setTimeout(() => {
        scrollToHomeOnLoad();
    }, 100);
}

// Use pageshow for all page loads (including refresh and back/forward)
window.addEventListener('pageshow', handlePageLoad);

// Handle image loading errors silently
function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Prevent console errors for missing images
        img.addEventListener('error', function(e) {
            e.stopPropagation();
            this.style.display = 'none';
            // Show placeholder if available
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('work-placeholder')) {
                placeholder.style.display = 'flex';
            }
        }, true);
        
        // Set loading attribute for better performance
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    handlePageLoad();
    initImageErrorHandling();
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
            const navToggle = document.querySelector('.nav-toggle');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });
}

// Scroll Reveal Animations - Fade in on scroll
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.skill-card, .work-card, .contact-item, .info-card, .resume-card, .internship-card, .detail-section'
    );
    
    // Set initial state and transition
    animatedElements.forEach(el => {
        el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
    });
    
    // Scroll animation - fade in when entering viewport, reset when leaving
    function updateScrollAnimations() {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementTop = rect.top;
            const elementBottom = rect.bottom;
            
            // Check if element is in viewport (with some offset)
            const isInViewport = elementTop < windowHeight * 0.8 && elementBottom > windowHeight * 0.2;
            
            if (isInViewport) {
                // Fade in when in viewport
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            } else {
                // Reset when out of viewport
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
            }
        });
    }
    
    // Initial check
    updateScrollAnimations();
    
    // Update on scroll with throttling for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateScrollAnimations();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    // Also update on resize
    window.addEventListener('resize', updateScrollAnimations, { passive: true });
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

// Form Validation and Email Sending
function initFormValidation() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('input, textarea');
            let isValid = true;
            
            // Validate all fields
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ec4899';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            // Disable submit button
            submitBtn.disabled = true;
            const originalText = submitBtn.querySelector('span').textContent;
            submitBtn.querySelector('span').textContent = 'Sending...';
            
            try {
                // Prepare form data for Web3Forms
                const formData = {
                    access_key: '90d91c26-da0a-4af9-a51b-b8fca9ff6dba',
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value,
                    from_name: document.getElementById('name').value
                };
                
                // Send email using Web3Forms
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (response.ok && result.success) {
                    showMessage('Message sent successfully! I will get back to you soon.', 'success');
                    form.reset();
                } else {
                    throw new Error(result.message || 'Failed to send message');
                }
            } catch (error) {
                console.error('Form Error:', error);
                showMessage('Failed to send message. Please try again or contact me directly at laurenzchristiancelestino@gmail.com', 'error');
            } finally {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.querySelector('span').textContent = originalText;
            }
        });
    }
}

// Show form message
function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.style.display = 'block';
        formMessage.textContent = message;
        formMessage.style.backgroundColor = type === 'success' 
            ? 'rgba(0, 229, 255, 0.1)' 
            : 'rgba(236, 72, 153, 0.1)';
        formMessage.style.color = type === 'success' 
            ? '#00e5ff' 
            : '#ec4899';
        formMessage.style.border = `1px solid ${type === 'success' ? '#00e5ff' : '#ec4899'}`;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
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

