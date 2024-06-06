// assets/lightbox.js

document.addEventListener('DOMContentLoaded', function() {
    // Get all images in the document
    const images = document.querySelectorAll('img');

    // Function to open the lightbox and show clicked image
    function openLightbox(imgSrc) {
        const lightbox = document.getElementById('lightbox');
        const zoomedImg = document.getElementById('zoomedImg');
        zoomedImg.src = imgSrc;
        lightbox.style.display = 'block';
    }

    // Attach click event listeners to each image
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            openLightbox(this.src);
        });
    });

    // Close the lightbox when the close button is clicked
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('lightbox').style.display = 'none';
    });

    // Close the lightbox when clicking outside the image
    window.addEventListener('click', function(event) {
        const lightbox = document.getElementById('lightbox');
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});