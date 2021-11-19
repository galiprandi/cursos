/**
 * Funciones, Async/Await, Fetch, Promises, Array.forEach
 */

// Get users from api and log each to console
const getUsers = async endpoint => {
  const response = await fetch(endpoint)

  if (!response.ok) throw Error('Hubo un error al recuperar los usuarios')

  const users = await response.json()

  users.forEach(user => {
    const { name, email, phone } = user
    console.log(`${name} | ${email} | ${phone}`)
  })
}

getUsers('https://jsonplaceholder.typicode.com/users')
