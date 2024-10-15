let currentImageIndex = 0;
let imagesArray = [];

// Función para abrir el modal
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    // Asigna el array de imágenes según la imagen que se abrió
    if (imageSrc.includes("1B")) {
        imagesArray = [
            'img/1B/postdeprueba1.png',
            'img/1B/postdeprueba5.png',
            'img/1B/postdeprueba3.png',
            'img/1B/postdeprueba4.png',
            'img/1B/postdeprueba2.png',
            'img/1B/postdeprueba6.png',
            // Agrega más imágenes de 1B aquí
        ];
    } else if (imageSrc.includes("2B")) {
        imagesArray = [            'img/1B/postdeprueba1.png',
            'img/2B/postdeprueba1.png',
            'img/2B/postdeprueba5.png',
            'img/2B/postdeprueba3.png',
            'img/2B/postdeprueba4.png',
            'img/2B/postdeprueba2.png',
            'img/2B/postdeprueba6.png',        ];
    } else if (imageSrc.includes("3B")) {
        imagesArray = [
            'img/3B/postdeprueba1.png',
            'img/3B/postdeprueba5.png',
            'img/3B/postdeprueba3.png',
            'img/3B/postdeprueba4.png',
            'img/3B/postdeprueba2.png',
            'img/3B/postdeprueba6.png',
        ];
    } else if (imageSrc.includes("4B")) {
        imagesArray = [
            'img/4B/postdeprueba1.png',
            'img/4B/postdeprueba5.png',
            'img/4B/postdeprueba3.png',
            'img/4B/postdeprueba4.png',
            'img/4B/postdeprueba2.png',
            'img/4B/postdeprueba6.png',
        ];
    } else if (imageSrc.includes("5B")) {
        imagesArray = [
            'img/4B/postdeprueba1.png',
            'img/4B/postdeprueba5.png',
            'img/4B/postdeprueba3.png',
            'img/4B/postdeprueba4.png',
            'img/4B/postdeprueba2.png',
            'img/4B/postdeprueba6.png',
        ];
    } else if (imageSrc.includes("6B")) {
        imagesArray = [
            'img/6B/postdeprueba1.png',
            'img/6B/postdeprueba5.png',
            'img/6B/postdeprueba3.png',
            'img/6B/postdeprueba4.png',
            'img/6B/postdeprueba2.png',
            'img/6B/postdeprueba6.png',
        ];
    }

    currentImageIndex = imagesArray.indexOf(imageSrc); // Encuentra el índice de la imagen actual
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Función para navegar a la imagen anterior
function prevImage() {
    currentImageIndex = (currentImageIndex === 0) ? imagesArray.length - 1 : currentImageIndex - 1;
    document.getElementById("modalImage").src = imagesArray[currentImageIndex];
}

// Función para navegar a la siguiente imagen
function nextImage() {
    currentImageIndex = (currentImageIndex === imagesArray.length - 1) ? 0 : currentImageIndex + 1;
    document.getElementById("modalImage").src = imagesArray[currentImageIndex];
}

// Asigna el evento de cerrar el modal al botón de cerrar
document.getElementById("closeModal").onclick = function() {
    closeModal();
};

// Asigna los eventos de las flechas de navegación
document.getElementById("prev").onclick = function() {
    prevImage();
};
document.getElementById("next").onclick = function() {
    nextImage();
};
