import './style.css'

console.warn('// ! Crear elementos de DOM')

const contenedorPrincipal = document.getElementById('contenedor-principal')
console.log(contenedorPrincipal)

const articulo = document.createElement('article')
articulo.textContent = "Hola mundo"
articulo.classList.add('w-50', 'h-30', 'bg-red-600', 'text-center', 'text-white')
contenedorPrincipal.appendChild(articulo)

// Eliminar un nodo html (Lo sacamos del dom)

articulo.remove()

contenedorPrincipal.appendChild(articulo)

// Eventos 

const cuadroDeTexto = document.querySelector('input')
console.log(cuadroDeTexto)

//cuadroDeTexto.setAttribute('id', '5')
cuadroDeTexto.classList.add('bg-green-600')

const input = document.getElementById('lbl-nombre')
console.log(input)

// 1. La variable donde se guarda el dato ingresado.
console.log(input.name)

// 2. Tomar el dato ingresado en el input
console.log(input.value)

const formu = document.getElementById('formu')

console.log(formu)

formu.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(formu)
    console.log(input.value) // aaa
    console.log(input.name) // nombre-oficial
    formu.reset()
})

// Enunciado. Formulario Básico
/* 
* Vamos crear un formulario en el html que tenga
Nombre (texto), Email (email), edad (número) Y un botón enviar

* Requisitos: No debe recargarse la página cuando el formulario es enviado
* Válidar: Campos deben ser obligatorios. 
* Mensaje (Extra): Si algún dato es inválido, mostrar un mensaje en patalla.
* Mensaje (Extra): Se envío correctamente el formulario.
*/