document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // "Get Started" Button Interaction
    const ctaBtn = document.getElementById('cta-btn');
    ctaBtn.addEventListener('click', () => {
        const featuresSection = document.getElementById('features');
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Form Submission Handling (Mock)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission refresh
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});