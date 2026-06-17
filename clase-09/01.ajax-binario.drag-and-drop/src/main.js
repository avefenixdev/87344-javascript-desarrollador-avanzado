import './style.css';

// Eventos
// Input file
const inputFile = document.querySelector('#input-file');

inputFile.addEventListener('change', (e) => {
  console.log('Cambió el input!');
  const archivo = e.target.files[0];
  console.dir(archivo);
});
