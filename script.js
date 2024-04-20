document.addEventListener("DOMContentLoaded", function() {
    var hb = document.querySelector(".hb");
    var cluz = document.querySelector(".cluz");
    var menudrop = document.querySelector(".tags");
    var section = document.querySelector(".back")

    hb.addEventListener("click", function () {
        hb.style.display = "none";
        cluz.style.display = "flex";
        menudrop.style.display = "flex";
        section.style.display = "block";
    });

    cluz.addEventListener("click", function () {
        hb.style.display = "flex";
        cluz.style.display = "none";
        menudrop.style.display = "none";
        section.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    document.querySelector('.prev-btn').addEventListener('click', prevSlide);
    document.querySelector('.next-btn').addEventListener('click', nextSlide);

    showSlide(currentSlide); // Show the first slide initially
});
