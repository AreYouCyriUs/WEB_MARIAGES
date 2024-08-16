let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 6500; // Intervalle de 5 secondes

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, slideInterval);
