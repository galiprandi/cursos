/**
 * Construyendo e iterando Arrays
 */

const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Iterando Arr con bucle for
for (let i = 0; i < Arr.length; i++) {
  console.log(Arr[i])
}

// Iterando Arr con bucle do while
let i = 0
do {
  console.log(Arr[i])
  i++
} while (i < Arr.length)

// Iterando Arr con bucle do while
let i = 0
while (i < Arr.length) {
  console.log(Arr[i])
  i++
}

// Iterando Arr con bucle for in
for (const i in Arr) {
  console.log(Arr[i])
}

// Iterando Arr con bucle for of
for (const i of Arr) {
  console.log(i)
}

// Iterando Arr con bucle forEach
Arr.forEach(element => console.log(element))
