// Hier export ik mijn databases, om te gebruiken in mijn components met gebruik van fetch()

// Dit is een test table
export const fetchTestData = () => {
  return fetch('http://localhost:3000/tests')
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
