body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.class-section {
    margin-bottom: 40px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.class-section h2 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
    color: #333;
}

.upload-container {
    display: flex; /* Alineación horizontal de las imágenes */
    flex-wrap: wrap; /* Permite que las imágenes pasen a la siguiente fila si es necesario */
    justify-content: flex-start; /* Alinea a la izquierda */
    margin-bottom: 10px;
}

.upload-container img {
    width: 100px; /* Ancho máximo de las imágenes */
    height: auto; /* Mantiene la proporción de la imagen */
    margin: 5px; /* Espaciado entre las imágenes */
    border-radius: 5px; /* Bordes redondeados */
    cursor: pointer; /* Cambia el cursor al pasar sobre las imágenes */
}

header {
    display: flex;
    justify-content: space-between; /* Alinea el logo a la derecha y el título a la izquierda */
    align-items: center; /* Centra verticalmente el contenido */
    margin-bottom: 20px; /* Espacio debajo del encabezado */
}

.logo {
    width: 100px; /* Ajusta el tamaño del logo */
    height: auto; /* Mantiene la proporción del logo */
}

/* Estilo para la imagen del mosquito muerto */
.mosquito-container {
    position: absolute;
    bottom: 50px; /* Espaciado desde la parte inferior de la página */
    right: 50px;  /* Espaciado desde la parte derecha de la página */
}

.mosquito-img {
    width: 100px; /* Ajusta el tamaño de la imagen del mosquito */
    height: auto; /* Mantiene la proporción de la imagen */
    border-radius: 5px; /* Bordes redondeados para la imagen del mosquito */
}

h5 {
    text-align: center; /* Centra el texto horizontalmente */
    margin-top: 20px; /* Espacio arriba del h5 */
}

/* Estilo del modal (pantalla completa) */
.modal {
    display: none; /* Oculto por defecto */
    position: fixed;
    z-index: 1000;
    padding-top: 60px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9); /* Fondo oscuro con transparencia */
}

.modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
}

.close {
    position: absolute;
    top: 20px;
    right: 35px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    user-select: none;
    -webkit-user-select: none;
}

.prev {
    left: 0;
}

.next {
    right: 0;
}

.modal-content, .prev, .next {
    transition: 0.6s ease;
}

/* Añade efecto de zoom al pasar por las imágenes del modal */
.modal-content:hover {
    transform: scale(1.05);
}
/* Estilo del modal (pantalla completa) */
.modal {
    display: none; /* Oculto por defecto */
    position: fixed;
    z-index: 1000;
    padding-top: 0; /* Elimina el padding superior */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9); /* Fondo oscuro con transparencia */
    display: flex;
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
}

.modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    max-height: 90vh; /* Evita que la imagen sea más alta que la pantalla */
    object-fit: contain; /* Escala la imagen para que no se distorsione */
}

.close {
    position: absolute;
    top: 20px;
    right: 35px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    user-select: none;
    -webkit-user-select: none;
}

.prev {
    left: 0;
}

.next {
    right: 0;
}

.modal-content, .prev, .next {
    transition: 0.6s ease;
}

/* Añade efecto de zoom al pasar por las imágenes del modal */
.modal-content:hover {
    transform: scale(1.05);
}
