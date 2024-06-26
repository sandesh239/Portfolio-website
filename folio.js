document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Scroll to top button
    const scrollToTopBtn = document.querySelector('#footer a[href="#header"]');
    
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
