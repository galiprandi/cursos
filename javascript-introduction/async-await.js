const getUsers = async endpoint => {
    const response = await fetch(endpoint)
   
    if(response.ok) thow Error('Hubo un error al recuperar los usuarios')
    const users = await response.json()
    console.log(users)
}

const endpoint = 'https://jsonplaceholder.typicode.com/users'

console.log(getUsers(endpoint))
