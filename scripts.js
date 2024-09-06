document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let index = 0;

    function showSlide(n) {
        items.forEach((item, i) => {
            item.style.display = (i === n) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        index = (index + 1) % items.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + items.length) % items.length;
        showSlide(index);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    showSlide(index);
});
