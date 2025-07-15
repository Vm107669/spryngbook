ScrollReveal().reveal('.hero-content', { delay: 200, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.ebook-card', { interval: 200, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.about', { delay: 300, origin: 'left', distance: '50px' });
ScrollReveal().reveal('.contact', { delay: 300, origin: 'right', distance: '50px' });

document.getElementById("email-link").addEventListener("click", function(event) {
    event.preventDefault();
    // Replace with logic to determine which client email should be used
    // For this example, we default to redirecting to the original
    const clientEmail = "spryngtech429@gmail.com"; // Could be dynamic
    window.location.href = `mailto:${clientEmail}`;
});


// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", function () {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("nav-active");
    this.classList.toggle("is-active");
});
