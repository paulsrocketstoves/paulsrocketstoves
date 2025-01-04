// Lightbox functionality with navigation
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const images = Array.from(document.querySelectorAll('.photo-gallery img'));
    let currentIndex = 0;

    // Open lightbox and set current image
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            lightboxImage.src = img.getAttribute('data-src');
            lightbox.classList.add('active');
            currentIndex = index;
        });
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImage && !e.target.classList.contains('lightbox-arrow')) {
            lightbox.classList.remove('active');
            lightboxImage.src = ''; // Clear the image
        }
    });

    // Navigate to the previous image
    const showPreviousImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentIndex].getAttribute('data-src');
    };

    // Navigate to the next image
    const showNextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImage.src = images[currentIndex].getAttribute('data-src');
    };

    // Add navigation arrows to the lightbox
    const leftArrow = document.createElement('div');
    leftArrow.innerHTML = '&#9664;'; // Left arrow
    leftArrow.className = 'lightbox-arrow left';
    lightbox.appendChild(leftArrow);
    leftArrow.addEventListener('click', (e) => {
        e.stopPropagation(); // Stop the event from propagating
        e.preventDefault(); // Prevent default click behavior
        showPreviousImage();
    });

    const rightArrow = document.createElement('div');
    rightArrow.innerHTML = '&#9654;'; // Right arrow
    rightArrow.className = 'lightbox-arrow right';
    lightbox.appendChild(rightArrow);
    rightArrow.addEventListener('click', (e) => {
        e.stopPropagation(); // Stop the event from propagating
        e.preventDefault(); // Prevent default click behavior
        showNextImage();
    });

    // Add event listeners for keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') showPreviousImage();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'Escape') lightbox.classList.remove('active');
    });
});
