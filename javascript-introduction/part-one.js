/**
 * Tipos de datos y variables
 */

var one = 1 // Definición de una variable

let two = 2 // Definición de una variable

const tree = 3 // Definición de una constante

/** Asignación de variables */

let myValue // myValue ahora es de tipo undefined

myValue = true // myValue ahora es de tipo boolean

myValue = 2022 // myValue ahora es de tipo number

myValue = 'Vacaciones 2022' // myValue ahora es de tipo string

myValue = 9007199254740991n // myValue ahora es de tipo bigint

myValue = Symbol('unique') // myValue ahora es de tipo symbol

myValue = null // myValue ahora es de tipo null

myValue = {
  type: 'Object',
  number: 2,
  fn: () => console.log('Hi!'),
}
// myValue ahora es de tipo object

myValue = () => console.log('Now is a arrow function') // myValue ahora es de tipo function
