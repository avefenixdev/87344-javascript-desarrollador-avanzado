import './style.css'

const url = 'https://jsonplaceholder.typicode.com/posts/'

// Petición para obtener todos los post
const peticion = fetch(url)

peticion
    .then((res) => {
        console.log(res)
        const info = res.json()
        return info
    })
    .then((data) => {
        console.log(data)
    })

// Petición para obtener un solo post (el 10)
const urlId = url + 10
//console.log(urlId)
const peticionXId = fetch(urlId)

console.log(peticionXId) // promesa

peticionXId
    .then((res) => {
        console.log(res)
        const promesaJson = res.json()
        return promesaJson
    })
    .then((dataXId) => {
        console.log(dataXId) // post -> id -> 10
    })

// Petición para obtener un solo post (con el id: 10)
// Los datos del usuario que creo ese post
const urlUsuario = 'https://jsonplaceholder.typicode.com/users/'
const urlIdYUsuario = url + 10 // 'https://jsonplaceholder.typicode.com/posts/' + 10
//console.log(urlIdYUsuario)
const peticionXIdConUsuario = fetch(urlIdYUsuario)

console.log(peticionXId) // promesa

peticionXIdConUsuario
    .then((res) => {
        console.log(res)
        const promesaJson = res.json()
        return promesaJson
    })
    .then((dataXId) => {
        console.log(dataXId) // post -> id -> 10
        console.log(dataXId.userId) // id del usuario que creo el post -> usuario -> (id: 1 )

        const urlUsuarioXId = urlUsuario + dataXId.userId
        console.log(urlUsuarioXId)
    })