let currentImageIndex = 0;
let imagesArray = [];

// Función para abrir el modal
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    // Asigna el array de imágenes según la imagen que se abrió
    if (imageSrc.includes("1B")) {
        imagesArray = [
            'img/1B/1B1trabajo.jpg',
            'img/1B/1B3trabajo.png',
            'img/1B/1trabajo.jpg',
            'img/1B/1A2trabajo.jpg',
            'img/1B/1A3trabajo.jpg',
            'img/1B/1A4trabajo.jpg',
        ];
    } else if (imageSrc.includes("2B")) {
        imagesArray = [
            'img/2B/trabajo2b1.jpg',
            'img/2B/trabajo2b2.jpg',
            'img/2B/trabajo2b3.jpg',
            'img/2B/trabajo2b4.jpg',
            'img/2B/trabajo2b5.jpg',
            'img/2B/trabajo2b6.jpg',    
            'img/2B/trabajo2b7.jpg',
        ];
    } else if (imageSrc.includes("3B")) {
        imagesArray = [
            'img/3B/3Btrabajo.jpg',
            'img/3B/3B2trabajo.jpg',
        ];
    } else if (imageSrc.includes("4B")) {
        imagesArray = [
            'img/4B/4B1trabajo.jpg',
            'img/4B/4B2trabajo.png',
            'img/4B/4B3trabajo.jpg',
            'img/4B/4A2trabajo.jpg',
            'img/4B/4A3trabajo.jpg',
            'img/4B/4A4trabajo.jpg',
            'img/4B/4A5trabajo.jpg',
        ];
    } else if (imageSrc.includes("5B")) {
        imagesArray = [
            'img/5B/trabajo25b.jpg',
            'img/5B/trabajo5b.jpg',
        ];
    } else if (imageSrc.includes("6B")) {
        imagesArray = [
            'img/6B/6B1trabajo.jpg',
            'img/6B/6B2trabajo.jpg',
            'img/6B/6B3trabajo.jpg',
            'img/6B/6B4trabajo.jpg',
            'img/6B/6B5trabajo.jpg',
            'img/6B/6B6trabajo.jpg',
        ];
    }

    currentImageIndex = imagesArray.indexOf(imageSrc); // Encuentra el índice de la imagen actual
    modal.style.display = "flex"; // Cambiado a 'flex' para que funcione con los nuevos estilos
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
