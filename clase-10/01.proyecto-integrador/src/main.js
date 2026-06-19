import './style.css';

const seleccionarElementoByID = (selector) => {
  const elemento = document.querySelector(selector)
  return elemento
}

const menuBtn = seleccionarElementoByID('#menu-btn')
const cartBtn = seleccionarElementoByID('#cart-btn')
const menu = seleccionarElementoByID('#menu')
const cartMenu = seleccionarElementoByID('#cart-menu')
//console.log(cartBtn)
//console.log(menuBtn)

/* Menú Hamburguesa */
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})

/* Carrito */
cartBtn.addEventListener('click', () => {
  cartMenu.classList.toggle('hidden')
})


const obtenerTodosLosProductos = async () => {
  const URL = import.meta.env.VITE_BACKEND_LOCAL
  try {
    const res = await fetch(URL)
    if (!res.ok) {
      throw new Error('No se pudo obtener todos los productos', res.status)
    }
    const productos = await res.json()
    return productos 
  } catch (error) {
    throw error
  }
}

const generarHtml = (productos) => {
  let html = ''

  productos.forEach((producto) => {
    //console.log(producto)
    //console.log(html)
    
    html += `
        <div class="bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition col-span-1">
            <img 
              src="img/${producto.imagen}" 
              alt="${producto.titulo}" 
              class="w-full h-48 object-cover rounded-md"
            >

            <div class="mt-4">
                <h5 class="text-lg font-semibold">${producto.titulo}</h5>

                <ul class="mt-3 mb-4 space-y-1">
                    <li class="uppercase text-sm text-gray-400 color">${producto.color}</li>
                    <li class="text-sm text-gray-300">Características</li>
                    <li class="text-xl font-bold text-green-400 precio">$<span>${producto.precio}</span></li>
                </ul>

                <a 
                  href="#" 
                  data-id="${producto.id}" 
                  class="agregar-carrito inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg font-medium transition"
                >
                  Comprar
                </a>
            </div>
        </div>
      `
      //debugger
  });
  
  //console.log(html) // <-- html x 5
  return html
}

const inyectarHtmlDOM = (listadoProductos, html) => {
  listadoProductos.innerHTML = html
}

const agregarAlCarritoProducto = (e) => {
  e.preventDefault()
  
  console.log(e)

  if (e.target.classList.contains('agregar-carrito')) {
    console.log('Hice click sobre el botón')
    const nodoDelProducto = e.target.parentElement.parentElement
    console.log(nodoDelProducto)
  }  /* else {
    console.log('Hicieron click sobre cualquier otro nodo html')
  } */
  

} 

const agregarEventos = (listadoProductos) => {
  //console.log(listadoProductos)

  listadoProductos.addEventListener('click', (e) => agregarAlCarritoProducto(e))
}

const start = async () => {
  const listadoProductos = seleccionarElementoByID('#lista-productos')
  

  try {
    // ! 1. Obtener los productos
    const productos = await obtenerTodosLosProductos()
    //console.log(productos)
    // ! 2. Generar html
    const html = generarHtml(productos)
    //console.log(html)
    // ! 3. Inyectar en el DOM el html
    inyectarHtmlDOM(listadoProductos, html)

    // ! 4. Agregar eventos
    agregarEventos(listadoProductos)
    
  } catch (error) {
    console.error(error)
  }

}

document.addEventListener('DOMContentLoaded', start)
