document.addEventListener('DOMContentLoaded', function() {
    // Slideshow for workshop images
    const workshopItems = document.querySelectorAll('#workshop .gallery-item');
    let currentIndex = 0;
    
    if (workshopItems.length > 0) {
        // Hide all but first image
        workshopItems.forEach((item, index) => {
            if (index > 0) item.style.display = 'none';
        });
        
        // Change image every 3 seconds
        setInterval(() => {
            workshopItems[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % workshopItems.length;
            workshopItems[currentIndex].style.display = 'block';
        }, 3000);
    }
});