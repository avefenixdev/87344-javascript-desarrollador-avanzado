import './style.css'

const url = 'https://jsonplaceholder.typicode.com/posts/'

// Fetch API es una herramienta del BOM para paticiones al backend.

/* const peticion = fetch(url)
// 1. then(), catch()
// 2. async, await

// 1. then(), catch()

console.log(peticion) // Promise

peticion
    .then(respuesta => {
        console.log(respuesta)
        return respuesta.json() // ReadableStream -> json
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    }) */

// Haciendo peticiones asincronicas a FakeStoreApi

const urlFakeStore = 'https://fakestoreapi.com/products/'

/* const peticion = fetch(urlFakeStore)

peticion
    .then((res) => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Response
        //console.log(res)
        return res.json()
    })
    .then((data) => {
        console.log(data)
        data.forEach(prod => {
            console.log(prod)
        })
    })
    .catch(err => {
        console.error(err)
    }) */

const urlReqRes = 'https://reqres.in/api/collections/products/records?project_id=27267'

// fetch(<url>, <options>)
const peticion = fetch(urlReqRes, {
    headers: {
        'x-api-key': 'pro_8bea1ceb0c60883f8b714bf5b4b5449d77b03bcf62350fbccf3cdd19ad5f6b08'
    }
})
/* then() | catch() */
/* peticion
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    }) */
// Siempre que dentro de una función utilice await mi función tiene que ser asincronica. Uso la palabra reservada async para convertir una función sincronica en una asincronica

const peticionReqRes = async () => {

   try {
        console.log(peticion)
        const res = await peticion
        console.log(res)
        const data = await res.json()
        console.log(data)
   } catch (error) {
        console.error(error)
   }

}

peticionReqRes()