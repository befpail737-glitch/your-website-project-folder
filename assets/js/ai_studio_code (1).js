document.addEventListener('DOMContentLoaded', () => {
    console.log('MORNSUN Distributor website loaded.');
    // Smooth scrolling for anchor links if any are added
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});