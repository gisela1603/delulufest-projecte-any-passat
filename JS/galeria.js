//Per a que s'amplïin les imatges al fer-hi clic al damunt
document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const images = document.querySelectorAll(".imatges-destacades img");

    if (!lightbox || !lightboxImg) return;

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImg.src = img.src;
        });
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });
});
//per a activar el botó per obrir el menú en pantalles petites
const boton = document.querySelector('.obrir-menu');
const nav = document.querySelector('nav');

boton.addEventListener('click', function() {
    nav.classList.toggle('active');
});
