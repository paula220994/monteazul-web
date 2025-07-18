document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch the JSON file and replace content
    fetch('textContent-ES.json')
        .then(response => response.json())
        .then(data => {
            // Replace text content dynamically
            document.querySelector('header h3').textContent = data.brandName;
            document.querySelector('meta[name="description"]').setAttribute('content', data.description);
            document.querySelector('title').textContent = data.title;
            document.querySelector('.intro p').textContent = data.introText;
            document.querySelector('.hero-content h2').textContent = data.productTitle;
            document.querySelector('.footer p').innerHTML = data.footerText;
        })
        .catch(error => {
            console.error('Error loading JSON file:', error);
        });
});
