// main.js
// This file can be used for interactive elements like mobile menus, sliders, etc.
// For now, it will be kept minimal.

document.addEventListener('DOMContentLoaded', () => {
    console.log('MORNSUN Distributor website loaded.');

    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});