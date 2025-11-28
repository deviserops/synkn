document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('testimonial-slider');
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length; // 3 actual slides
    let currentSlide = 0;
    const slideInterval = 4000; // 4 seconds

    // 1. Clone the first slide to create a seamless loop effect
    const firstSlideClone = slides[0].cloneNode(true);
    firstSlideClone.classList.add('clone');
    slider.appendChild(firstSlideClone);

    // 2. Function to determine the percentage to translate based on screen size
    const getSlideWidthPercentage = () => {
        const width = window.innerWidth;
        if (width >= 1024) return 100 / 3; // lg: Show 3 slides, slide 1/3 (33.33%)
        if (width >= 640) return 100 / 2;  // sm: Show 2 slides, slide 1/2 (50%)
        return 100;                       // default: Show 1 slide, slide 1/1 (100%)
    };

    // 3. Update the slider position
    const updateSlider = () => {
        currentSlide++;

        const slidePercentage = getSlideWidthPercentage();
        const movePercentage = currentSlide * slidePercentage;

        slider.style.transform = `translateX(-${movePercentage}%)`;

        // Check if we hit the cloned slide (index 3, which is totalSlides)
        if (currentSlide === totalSlides) {
            // Wait for the visible transition to finish
            setTimeout(() => {
                slider.style.transitionDuration = '0ms'; // Stop transition
                currentSlide = 0; // Reset index to the first slide
                slider.style.transform = `translateX(0)`; // Instant reset position
            }, 500); // Must match CSS transition duration (500ms)

            // Re-enable transition for the next auto-slide
            setTimeout(() => {
                slider.style.transitionDuration = '500ms';
            }, 550);
        }
    };

    // 4. Start the auto-slide
    let autoSlide = setInterval(updateSlider, slideInterval);

    // 5. Pause on hover for better UX
    slider.parentNode.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    slider.parentNode.addEventListener('mouseleave', () => {
        autoSlide = setInterval(updateSlider, slideInterval);
    });

    // 6. Handle window resize (recalculate widths and reset position)
    window.addEventListener('resize', () => {
        clearInterval(autoSlide);
        // Reset position instantly on resize to prevent jumps
        currentSlide = 0;
        slider.style.transitionDuration = '0ms';
        slider.style.transform = `translateX(0)`;

        // Re-enable transition after a very short delay
        setTimeout(() => {
            slider.style.transitionDuration = '500ms';
            autoSlide = setInterval(updateSlider, slideInterval);
        }, 100);
    });
});