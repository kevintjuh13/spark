// Hier export ik mijn databases, om te gebruiken in mijn components met gebruik van fetch()

// Dit is een test table
export const fetchTestData = () => {
  return fetch('http://localhost:3000/tests')
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching data: ', error))
}
export const fetchOpties = () => {
  return fetch('http://localhost:3000/intresses')
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching data: ', error))
}
// Dit is een tweede test table
export const test2 = () => {
  return fetch('http://localhost:3000/test2')
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching data: ', error))
}

export const addTestData = (data) => {
  return fetch('http://localhost:3000/tests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error adding data: ', error))
}

export const deleteTestData = (id) => {
  return fetch(`http://localhost:3000/tests/${id}`, {
    method: 'DELETE'
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error deleting data: ', error))
}

export const updateTestData = (id, data) => {
  return fetch(`http://localhost:3000/tests/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error updating data: ', error))
}

// bekijkt of the email die ingevoerd is al bestaat

export const addUser = (user) => {
  console.log('Adding user:', user)
  return fetch(`http://localhost:3000/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((response) => {
      console.log('Response from adding user:', response)
      return response.json()
    })
    .catch((error) => console.error('Error adding user:', error))
}
