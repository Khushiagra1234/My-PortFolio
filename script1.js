const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// Back to Top button logic
const scrollToTopButton = document.createElement('button');
        scrollToTopButton.innerHTML = '↑';
        scrollToTopButton.style.position = 'fixed';
        scrollToTopButton.style.bottom = '20px';
        scrollToTopButton.style.right = '20px';
        scrollToTopButton.style.backgroundColor = '#ff007f';
        scrollToTopButton.style.color = 'white';
        scrollToTopButton.style.border = 'none';
        scrollToTopButton.style.padding = '15px';
        scrollToTopButton.style.borderRadius = '50%';
        scrollToTopButton.style.display = 'none';
        scrollToTopButton.style.fontSize = '20px';
        document.body.appendChild(scrollToTopButton);

        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });

        scrollToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });