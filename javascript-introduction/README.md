# Javascript Introducción

> - Nivel: Introductorio
>
> - Requisitos: Conocimientos básicos previos en lógica.
>
> - Duración: 45 minutos.
>
> - Docente: Germán Aliprandi

## Objetivo del curso

## Temario:

### Tipos de datos y variables

JavaScript es un lenguaje débilmente tipado y dinámico. Las variables en JavaScript no están asociadas directamente con ningún tipo de valor en particular, y a cualquier variable se le puede asignar (y reasignar) valores de todos los tipos. El último estándar ECMAScript define nueve tipos. [más..](<(https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)>)

> En javascript, todos los tipos de datos, **excepto los objetos**, son denominados tipos de datos primitivos y definen valores inmutables, además de no poseer métodos ni propiedades.

#### Primitivos

- **undefined**: es automáticamente asignado a las variables que solo han sido declarados. [más..](https://en.wikipedia.org/wiki/Undefined_value)

- **boolean**: dato lógico que solo puede tener los valores true o false. [más..](https://es.wikipedia.org/wiki/Tipo_de_dato_l%C3%B3gico)

- **number**: datos numéricos de double precision y de 64-bit de punto flotante descripto por el standard (IEEE 754). [más..](https://es.wikipedia.org/wiki/Tipo_de_dato#Num.C3.A9ricos)

- **string**: es una secuencia de caracteres usado para representar el texto. [más..](http://es.wikipedia.org/wiki/Cadena_de_caracteres)

- **bigint**: dato numerico que puede representar números enteros en el formato de precision arbitrario. [más..](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type)

- **symbol**: dato primitivo en cuyos casos son únicos e inmutables. [más..](http://en.wikipedia.org/wiki/Symbol_%28programming%29)

- **null**: referencia que apunta, generalmente intencionadamente, a una inexistente o inválido objeto o dirección. [más..](https://es.wikipedia.org/wiki/Puntero_%28inform%C3%A1tica%29#Puntero_nulo)

#### Objectos

- **object**: estructura de datos que contiene datos e instrucciones para trabajar con los datos. [más..](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Objects)

- **function**: fragmento de código que puede ser llamado por otro código, por sí mismo, o por una variable que haga referencia a la misma. Este también es un tipo de dato object, pero el método **typeof** hace una excepción en este caso y reconoce a las funciones con el tipo "function". [más..](https://developer.mozilla.org/es/docs/Glossary/Function)

### Bucles e iteradores

Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente. [más..](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)

- Iterador for

- Iterador do...while

- Iterador while

- Iterador for...in

- Iterador for...of

- Iterador forEach

### Manejo de errores

En javascript puedes lanzar excepciones usando la instrucción throw y manejarlas usando las declaraciones try...catch. [más...](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

### Javascript Object Notation (JSON)

JavaScript Object Notation (JSON) es un formato basado en texto estándar para representar datos estructurados en la sintaxis de objetos de JavaScript. Es comúnmente utilizado para transmitir datos en aplicaciones web (por ejemplo: enviar algunos datos desde el servidor al cliente, así estos datos pueden ser mostrados en páginas web, o vice versa). [más..](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON)

```js
/** Ejemplo de JSON */

const json = {
  name: 'John',
  age: 30,
  city: 'New York',
}
```

### Funciones

Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función es similar a un procedimiento **un conjunto de instrucciones que realiza una tarea o calcula un valor**, pero para que un procedimiento califique como función, **debe tomar alguna entrada y devolver una salida** donde hay alguna relación obvia entre la entrada y la salida. [más..](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)

```js
/** Ejemplo de función */
function sumA(a, b) {
  return a + b
}

/** Ejemplo de función en formato arrow function */
const sumB = (a, b) => a + b
```

### Async/Await y Promesas

El objeto Promise (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca. [más...](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)

### Document Object Model (DOM)

El DOM es una API definida para representar e interactuar con cualquier documento HTML o XML. El DOM es un modelo de documento que se carga en el navegador web y que representa el documento como un árbol de nodos. [más..](https://developer.mozilla.org/es/docs/Glossary/DOM)

### Fetch

La API Fetch proporciona una interfaz para recuperar recursos que también ofrece un conjunto de características más potente y flexible. [más..](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## Ejercicios con código

- [Primera Parte](https://github1s.com/galiprandi/cursos/blob/HEAD/javascript-introduction/part-one.js)

- [Segunda Parte](https://github1s.com/galiprandi/cursos/blob/HEAD/javascript-introduction/part-two.js)

- [Tercera Parte](https://github1s.com/galiprandi/cursos/blob/HEAD/javascript-introduction/part-three.js)
