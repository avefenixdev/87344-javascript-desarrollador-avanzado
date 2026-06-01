import './style.css'


/* -------------------------------------------- */
console.warn('/* Comunicación asincrónica con AJAX */')
/* -------------------------------------------- */

/* --------------------------------------------------- */
/* Comunicación asincrónica con AJAX                   */
/* AJAX: Asyncronous JavaScript and XML                */
/* Un objeto llama XMLHttpRequest (Con eso trabajamos) */
/* --------------------------------------------------- */

// XMLHttpRequest (BOM) -> Hacer peticiones y recibir respuesta bajo el protoloco http -> callback
// axios (Librería) -> Hacer peticiones y recibir respuestas -> Utilizar por detrás XMLHttpRequest -> promisas
// fetch (BOM) -> Hacer peticiones y recibir respuesta bajo el protoloco http -> promisas (Azucar sintactica)

// ----> 

// ! XML (Archivo de texto plano)
// * Nos permite transmitir información de manera estandar y liviana del backend al frontend y viceversa

// https://es.wikipedia.org/wiki/Extensible_Markup_Language

// ! JSON (Archivo de texto plano)
// * JavaScript Object Notation
// * Nos permite transmitir información de manera estandar y liviano del backend al frontend y viceversa

// https://es.wikipedia.org/wiki/JSON
// https://www.json.org/json-en.html

// ! PROTOCOLO HTTP

// https://reparartuordenador.com/como-funciona-el-protocolo-http

// ! Métodos (verbos) HTTP

// Además de los métodos disponibles en los formularios (GET y POST)
// ABM (acronimo) ->  ALTA,             MODIFICACIÓN | BAJA
// CRUD (acronimo) -> C:CREATE | R:READ | U:UPDATE | D:DELETE
// M.HTTP ->          POST     | GET    | PUT      | DELETE

// https://developer.mozilla.org/es/docs/Web/HTTP/Methods

// https://www.atatus.com/glossary/content/images/2021/07/CRUD.jpeg

// ! Status HTTP
// Es la respuesta que nos va a entregar el backend. El resultado de la comunicación.

// * Respuesta informativas (100-199)
// * Respuesta satisfactorias (200-299)
// * Redirecciones (300-399)
// * Errores de clientes (400-499)
// * y errores de los servidores (500-599)

// https://developer.mozilla.org/es/docs/Web/HTTP/Status
// https://http.cat/
// https://httpstatusdogs.com/
// https://www.youtube.com/shorts/TtYLv8COtJk

// ! Headers HTTP
// Dentro del protocolo HTTP los archivos que llegan por el protocolo http va a tener una cabecera de petición y una cabecera de respuesta

// https://developer.mozilla.org/es/docs/Web/HTTP/Headers

// API Productos (Endpoints -> Rutas -> Points)

// GET -> CRUD -> R:READ -> http://localhost:8080/productos
// POST -> CRUD -> C:CREATE -> http://localhost:8080/productos + el nuevo producto
// PUT -> CRUD -> U:UPDATE -> http://localhost:8080/productos/id + el producto editado
// DELETE -> CRUD -> D:DELETE -> http://localhost:8080/productos/id
