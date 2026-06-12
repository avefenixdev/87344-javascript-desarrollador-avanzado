// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'; // Agrego los scripts de bootstrap
import './style.css';

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

// ! LocalStorage
// Almacenamiento local persistente del lado del navegador. Dentro del navegador.

// Ocupan 5 y 10 MB. Se almacena y persiste incluso cerrando la pestaña o el nevegador. No se envía al servidor. La info almacenada queda localmente en el cliente (navegador)
// También es vulnerable a los ataques XSS.

// * Preferncias de UI (tema, idioma)
// * Estado de la ppa que no es sesible.
// * Cache simple de datos públicos.

// ! sessionStorage. 
// Ocupan 5 y 10 MB. Almacenamiento local del lado del navegador pero solo durante la sesión actual de navegador. Que si cierro la pestaña o el navegador se borra la información. No se envía al servidor.

// * Estados temporales
// * Formularios parcialmente completados
// * Flujo de varios pasos.