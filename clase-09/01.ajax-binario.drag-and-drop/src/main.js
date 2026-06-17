import './style.css';

// Función para gestionar el archivo recibido

const handleFile = (file) => {
  console.log(file);
  const reader = new FileReader();
  reader.readAsDataURL(file); // Lee el archivo como una URL
  reader.onload = () => {
    //console.log(reader.result);
    const preview = document.querySelector('#preview');
    preview.src = reader.result;
    preview.classList.remove('hidden');
  };
};

const handleRequestBackendLocal = (archivo) => {
  console.log('Enviando al backend...');
  console.log(archivo);
};

// Eventos
// Input file
const inputFile = document.querySelector('#input-file');

inputFile.addEventListener('change', async (e) => {
  console.log('Cambió el input!');
  const archivo = e.target.files[0];
  // console.dir(archivo);
  // ! previsualización de la imagen
  handleFile(archivo);
  const imagen = await handleRequestBackendLocal(archivo);
  console.log(imagen); // URL de la imagen subida en el backend (http://localhost:8080/upload/imagen.jpg)
});

// Drag and Drop
const dropArea = document.querySelector('#drop-area');
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
// https://developer.mozilla.org/es/docs/Web/API/File
// https://developer.mozilla.org/es/docs/Web/API/FileReader
dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  console.log('dragover');
});
dropArea.addEventListener('dragleave', (e) => {
  e.preventDefault();
  console.log('dragleave');
});
dropArea.addEventListener('drop', async (e) => {
  e.preventDefault();
  console.log('drop');
  // console.log(e.dataTransfer.files[0]);
  const archivo = e.dataTransfer.files[0];
  // ! previsualización de la imagen
  handleFile(archivo);
  const imagen = await handleRequestBackendLocal(archivo);
  console.log(imagen); // URL de la imagen subida en el backend (http://localhost:8080/upload/imagen.jpg)
});

// Cancelo el comportamiento de abrir el recurso si estoy fuera de la zona de drag & drop
document.addEventListener('dragover', (e) => {
  e.preventDefault();
});
document.addEventListener('dragleave', (e) => {
  e.preventDefault();
});
document.addEventListener('drop', (e) => {
  e.preventDefault();
});
