/**
 * NexusSaaS Main JavaScript
 * Handles navigation toggle, form submission mock, and basic interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle ARIA state
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle visibility class
            mainNav.classList.toggle('is-open');
        });
    }

    // Contact Form Mock Submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission for demo
            
            // Simulate form processing
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Show success message
                formSuccess.hidden = false;
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.hidden = true;
                }, 5000);
                
            }, 1000); // 1 second mock delay
        });
    }

    // Intersection Observer for simple scroll animations (Optional enhancement)
    const fadeElements = document.querySelectorAll('.feature-card, .pricing-card');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }
});
