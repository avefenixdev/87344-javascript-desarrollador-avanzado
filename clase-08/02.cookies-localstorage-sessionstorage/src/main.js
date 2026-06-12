// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'; // Agrego los scripts de bootstrap
import './style.css';
import Cookies from 'js-cookie';

// ! Cookies
// Son pequeños archivos que el navegador guardar y se envían automaticamente al servidor dentro del request. se utilizan para guardar información de sesión, preferencias de usuario, etc.

// Ocupan 4 kb, clave valor, fecha de expiración, dominio, ruta, etc.

// Pueden ser HttpOnly, lo que signifca que no pueden ser accedidas por JavaScript, lo que hace más seguro su uso para almacenar.

// * Autenticación basada en sesión
// * Tokens de sesión (Mejor que localstorage)
// * Preferencias minimas del usuario.

//console.log(document.cookie)
document.cookie = "usuario=Maxi; path=/; max-age=3600;"
console.log(document.cookie)   

function getCookie(nombre) {
    return document.cookie.
        split('; ').find(row => row.startsWith(nombre + '='))?.split("=")[1];
}

console.log(getCookie("theme"))

// ! JS Cookies
// Librería que nos facilita el manejo de cookies en el navegador.
// npm i js-cookie

// * Obteniendo las cookies
console.log(Cookies.get("usuario"))
console.log(Cookies.get())

// * Creando una cookie
Cookies.set('theme', 'dark', { expires: 7 })

// * Borrando cookie
Cookies.remove('numero')

// * Seteando httpOnly
Cookies.set('foo', 'bar', { HttpOnly: true }) // Solo puede ser accedidas por el servidor, no por JavaScript

// ! LocalStorage
// Almacenamiento local persistente del lado del navegador. Dentro del navegador.

// Ocupan 5 y 10 MB. Se almacena y persiste incluso cerrando la pestaña o el nevegador. No se envía al servidor. La info almacenada queda localmente en el cliente (navegador)
// También es vulnerable a los ataques XSS.

// * Preferncias de UI (tema, idioma)
// * Estado de la ppa que no es sesible.
// * Cache simple de datos públicos.

window.localStorage.setItem('theme', 'light');
window.localStorage.setItem('object', JSON.stringify({x: 1, y: 2})); // Convierto a cadena y luego hago el set
console.log(window.localStorage)

window.localStorage.removeItem('theme') // Eliminar por la key el elemento del storage
// window.localStorage.clear() // Elimina todo el localStorage

console.log(JSON.parse(window.localStorage.getItem('object'))) // cadena
console.log(window.localStorage.getItem('lista')) // null

// ! sessionStorage. 
// Ocupan 5 y 10 MB. Almacenamiento local del lado del navegador pero solo durante la sesión actual de navegador. Que si cierro la pestaña o el navegador se borra la información. No se envía al servidor.

// * Estados temporales
// * Formularios parcialmente completados
// * Flujo de varios pasos.

// ! LO MISMOS QUE EL localStorage PERO SOLO DURANTE LA SESIÓN ACTUAL DEL NAVEGADOR

// ! API para trabajar con el localStorage

class LocalStorageAPI {

    constructor(storageKey) {
        this.storageKey = storageKey;
        this.data = this.loadData() || {}
    }
    // Precarga de los elementos que están en el LS
    loadData() {
        const crudoData = localStorage.getItem(this.storageKey);
        return crudoData ? JSON.parse(crudoData) : [];
    }
    // Guardar (Guardar el elemento dentro del LS)
    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }
    // Obtener todos los elementos
    getAll() {
        return [...this.data]
    }

    // Generar ID único para cada elementos creado
    generateId() {
        return crypto.randomUUID();
    }

    // Crear el elemento (Crear un elemento y guardarlo en el el LS)
    create(entity) {
        const nuevaEntity = { id: this.generateId(), ...entity}

        this.data.push(nuevaEntity);
        this.save();
        return nuevaEntity;
    }
    // Obtener por ID especifico.
    getById(id) {
        return this.data.find(item => item.id === id) || null;
    }

    edit() {

    }

    delete(id) {
        const index = this.data.findIndex(item => item.id === id);
        // findIndex -> devuelve la posición del elemento dentro del array buscando por id.
        // Si lo encuentra devuevle la posición donde se encuentra el elemento, sino lo encuentra devuelve -1

    }

}

const apiLS = new LocalStorageAPI('carrito');
console.log(apiLS.getAll()) 
console.log(apiLS)

//apiLS.create({ producto: 'camisa', precio: 1000 })
//apiLS.create({ producto: 'pantalon', precio: 1500 })
//console.log(apiLS.getAll())

const found = apiLS.getById("4fff2d1a-0410-4388-976f-977b7d4784a5");
console.log(found)