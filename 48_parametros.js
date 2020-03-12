/*1. Ejercicios con parámetros
1- Crear una función llamada mostrarNombreCompleto.
Esta función recibe 2 parámetros: nombre y apellido.
La función debe mostrar en consola el nombre completo de la persona, concatenando nombre y apellido
Por ejemplo: si los parámetros son 'Ada' y 'Lovelace', mostrar en consola 'Ada Lovelace'*/

const mostrarNombreCompleto = (nombre, apellido) => {
    console.log(nombre + " " + apellido)
};

mostrarNombreCompleto("Ada", "Lovelace")

/*2- Crear una funcion llamada sonIguales() que reciba dos parametros.
La funcion debe mostrar en consola "true" si los parametros son iguales, y "false" si son diferentes.*/

const sonIguales = (param1, param2) => {
    if (param1 === param2) {
        console.log(true)
    }
    else {
        console.log(false)
    }
};

sonIguales(3, 5)
sonIguales(7, 7)
sonIguales("true", false)

/*3- Crear una funcion llamada agregarNumero() que reciba dos parametros: un array y un numero.
La funcion debe agregar el numero recibido al array, y mostrar el array resultante en consola.*/

const agregarNumero = (array, num) => {
    array.push(num)
    console.log(array)
};

let arr = [1, 2, 3, 4]
let numero = 5
agregarNumero(arr, numero)

/*4- Crear una funcion llamada comprobarPosicion() que reciba dos parametros: un array de strings y un string
La funcion debe revisar si el string esta incluido dentro del array, y mostrar en consola "true" o "false".*/


const comprobarPosicion = (arr, str) => {

    let datoEncontrado = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == str) {
            datoEncontrado = true
        }
        console.log(datoEncontrado)
    }
};

let arrayDeNombres = ["Ivi", "Sabri", "Ceci", "Pieri"]
let alumnaFaltante = ["Gabu"]
comprobarPosicion(arrayDeNombres, alumnaFaltante)

/*5- Crear una función llamada calcularPromedio()
La función recibe un único parámetro, del tipo array, con números enteros
La funcion debe mostrar en consola el promedio entre todos los números que pertenecen al array*/

const calcularPromedio = (arrayarray) => {
    let acumuladora = 0
    for (let i = 0; i < arrayarray.length; i++) {
        acumuladora += arrayPromedio[i]        
    }
    console.log(acumuladora / arrayarray.length)
};

let arrayPromedio = [1, 2, 3, 4, 5, 6, 7, 8]
calcularPromedio(arrayPromedio)

