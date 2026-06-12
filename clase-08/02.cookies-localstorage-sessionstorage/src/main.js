// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'; // Agrego los scripts de bootstrap
import './style.css';
import Auto from './entidades/Auto';
import CuentaBancaria from './entidades/CuentaBancaria';

/* 
  Pilares del paradigma orientado a objetos

  1. Abstracción

      Aislar lo importante. Un “Usuario” no necesita saber cuántas pestañas tiene el navegador.

  2. Encapsulamiento

      Proteger y ocultar datos internos.
      JavaScript permite campos privados (#campo).

  3. Herencia

        Una clase “hija” extiende a otra y reutiliza comportamiento.

  4. Polimorfismo

    Diferentes clases pueden responder distinto al mismo método.

*/

// ! 1. Abstracción (Simplificación de la realidad)
// * Si modelo las caracteristicas de un AUto, no me interesa la presi'on exacta del pistón... la marca la velocidad y métodos basicos
// Un clase es una simplificación de la realidad. Molde que permite crear a partir multiples Autos.
// * El constructor es una método (acción) especial que se ejecuta ni bien quiero crear un objeto.
// Clase (Modelo)
// Instancia de la clase (Objeto) -> El Auto concreto.

const a1 = new Auto('Ford', 0);
console.log(a1);
a1.acelerar();
a1.acelerar();
a1.acelerar();
a1.acelerar();
a1.acelerar();
a1.acelerar();
console.log(a1.marca);
console.log(a1.velocidad);
a1.frenar();
a1.frenar();
a1.frenar();
console.log(a1.marca);
console.log(a1.velocidad);

// ! 1. Encapsulamiento
// * Es proteger los datos internos y que nadie meta mano donde no debe
// * JS permite propiedades ocultas #

const c1 = new CuentaBancaria();
console.log(c1.verSaldo()); /* GETTER */
// SETTER
c1.depositar(1_000_000);

console.log(c1.verSaldo());

// ! 3 HERENCIA
// Tenemos una clase base Animal
// Un Perro es un Animal, pero tiene comportamientos propios

class Animal {
    
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log('Sonido genérico!')
    }

}


class Perro extends Animal {
    // Sobreescribo el método hacer sonido para que el perro haga un sonido específico
    hacerSonido() {
        console.log('Guau guau!')
    }
}

const animal = new Animal('Mascota')
console.log(animal.nombre);
animal.hacerSonido();

const perrito = new Perro('Princesa');
console.log(perrito.nombre);
perrito.hacerSonido();

// ! 4. Polimorfismo

class Notificador {
    notificar() {
        console.log('Notificación genérica');
    }
}

class NotificadorEmail extends Notificador {
    notificar() {
        console.log('Enviando correo')
    }
}

const notiEmail = new NotificadorEmail();
notiEmail.notificar();

class NotificadorWhatsapp extends Notificador {
    notificar() {
        console.log('Enviando mensaje de Whatsapp')
    }
}
const notiWhatsapp = new NotificadorWhatsapp();
notiWhatsapp.notificar();

// Ejemplo

class Componente {
    constructor(selector) {
        this.container = document.querySelector(selector);
        if (!this.container) {
            throw new Error('No se encontró el elemneto')
        }
    }

    render() {
        throw new Error('El método render debe ser implementado por la clase hija');
    }
}

class Navbar extends Componente {
    constructor(selector) {
        super(selector)
        this.user = null
    }
}

const navbar = new Navbar('#navbar');
navbar.render() 

