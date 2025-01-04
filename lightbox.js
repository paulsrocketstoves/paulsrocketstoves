document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const lightboxCaption = document.querySelector(".lightbox-caption");
    const images = document.querySelectorAll(".experience-gallery-grid img");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");
    let currentIndex = 0;

    // Open Lightbox
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            updateLightbox();
            lightbox.style.display = "flex";
        });
    });

    // Close Lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Navigate to Previous Image
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    });

    // Navigate to Next Image
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    });

    // Update Lightbox Content
    function updateLightbox() {
        const img = images[currentIndex];
        lightboxImage.src = img.src;
        lightboxCaption.textContent = img.alt;
    }

    // Close Lightbox When Clicking Outside Image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
