
const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => observer.observe(el));

const cards = document.querySelectorAll('.card');

const carousels = document.querySelectorAll(".mini-carousel");

carousels.forEach((carousel) => {

    const images = carousel.querySelectorAll(".carousel-img");

    let index = 0;

    setInterval(() => {

        images[index].classList.remove("active");

        index = (index + 1) % images.length;

        images[index].classList.add("active");

    }, 2500);

});


