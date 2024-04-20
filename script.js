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