const testiCards = document.querySelectorAll('.testi-card');
    let currentIndex = 0;
    function showNextTestimonial() {
      testiCards[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % testiCards.length;
      testiCards[currentIndex].style.display = 'block';
    }
    testiCards[currentIndex].style.display = 'block';
    setInterval(showNextTestimonial, 5000);