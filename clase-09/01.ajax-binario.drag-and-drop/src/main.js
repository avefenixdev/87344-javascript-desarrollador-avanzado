import './style.css';

// Eventos
// Input file
const inputFile = document.querySelector('#input-file');

inputFile.addEventListener('change', (e) => {
  console.log('Cambió el input!');
  const archivo = e.target.files[0];
  console.dir(archivo);
});

// Drag and Drop
const dropArea = document.querySelector('#drop-area');
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  console.log('dragover');
});
dropArea.addEventListener('dragleave', (e) => {
  e.preventDefault();
  console.log('dragleave');
});
dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  console.log('drop');
});

document.addEventListener('dragover', (e) => {
  e.preventDefault();
});
document.addEventListener('dragleave', (e) => {
  e.preventDefault();
});
document.addEventListener('drop', (e) => {
  e.preventDefault();
});
