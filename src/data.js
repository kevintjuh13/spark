// Hier export ik mijn databases, om te gebruiken in mijn components met gebruik van fetch()

// Functie om opties op te halen
export const fetchOpties = () => {
  return fetch('http://localhost:3000/intresses')
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching data: ', error))
}

// Functie om gebruikersgegevens op te halen
export const getUserData = (userId) => {
  return fetch(`http://localhost:3000/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching user')
      }
      return response.json()
    })
    .catch((error) => {
      console.error('Error fetching user data:', error)
      throw error
    })
}

// Functie om gebruikersgegevens te verwijderen
export const deleteUserData = (userId) => {
  return fetch(`http://localhost:3000/users/${userId}`, {
    method: 'DELETE'
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Fout bij het verwijderen van de gebruiker')
      }
    })
    .catch((error) => {
      console.error('Fout bij het verwijderen van de gebruiker:', error)
      throw error
    })
}

// Functie om een gebruiker toe te voegen
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

// Functie om gebruikersgegevens bij te werken
export const updateUserData = (user) => {
  const formData = new FormData()
  formData.append('name', user.name)
  formData.append('age', user.age)
  formData.append('gender', user.gender)
  formData.append('show', user.show)
  formData.append('interest', user.interest)
  formData.append('picture', user.picture)

  return fetch(`http://localhost:3000/users/${user.id}`, {
    method: 'PUT',
    body: formData
  })
    .then((response) => {
      console.log('Response from updating user data:', response)
      return response.json()
    })
    .catch((error) => console.error('Error updating user data:', error))
}

// Functie om een date toe te voegen
export const addDate = (date) => {
  console.log('Adding date:', date)
  return fetch(`http://localhost:3000/dates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(date)
  })
    .then((response) => {
      console.log('Response from adding date:', response)
      return response.json()
    })
    .catch((error) => console.error('Error adding date:', error))
}

// Functie om de URL van een afbeelding op te halen
export function getImageURL(picturePath) {
  const serverURL = 'http://localhost:3000'
  return `${serverURL}/uploads/${picturePath}`
}

// Functie om dates op te halen
export const getDates = () => {
  return fetch('http://localhost:3000/dates')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching dates')
      }
      return response.json()
    })
    .then((data) => {
      const datePromises = data.map((date) => {
        return fetch(`http://localhost:3000/users/${date.userId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Error fetching user')
            }
            return response.json()
          })
          .then((userData) => {
            return {
              id: date.id,
              user: {
                id: date.userId,
                name: userData.name,
                age: userData.age,
                show: userData.show,
                gender: userData.gender,
                interest: userData.interest,
                picture: userData.picture
              },
              name: date.naamDate,
              description: date.beschrijvingDate,
              date: date.datumDate,
              time: date.tijdDate,
              location: date.locatieDate
            }
          })
      })

      return Promise.all(datePromises)
    })
    .catch((error) => {
      console.error('Error fetching dates:', error)
      throw error
    })
}

// Functie om een date te plaatsen
export const postDate = (dateData) => {
  const { userId, naamDate, beschrijvingDate, datumDate, tijdDate, locatieDate } = dateData

  const data = {
    naamDate: naamDate,
    beschrijvingDate: beschrijvingDate,
    datumDate: datumDate,
    tijdDate: tijdDate,
    locatieDate: locatieDate,
    userId: userId
  }

  return fetch('http://localhost:3000/dates', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error posting date')
      }
      return response.json()
    })
    .then((date) => {
      return {
        id: date.id,
        user: {
          id: userId,
          name: null,
          age: null,
          picture: null
        },
        name: date.naamDate,
        description: date.beschrijvingDate,
        date: date.datumDate,
        time: date.tijdDate,
        location: date.locatieDate
      }
    })
    .catch((error) => {
      console.error('Error posting date:', error)
      throw error
    })
}

// Functie om een datum op te halen op basis van ID
export const getDateById = (dateId) => {
  return fetch(`http://localhost:3000/dates/${dateId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching date')
      }
      return response.json()
    })
    .then((date) => {
      return fetch(`http://localhost:3000/users/${date.userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error fetching user')
          }
          return response.json()
        })
        .then((userData) => {
          return {
            id: date.id,
            user: {
              id: date.userId,
              name: userData.name,
              age: userData.age,
              picture: userData.picture
            },
            name: date.naamDate,
            description: date.beschrijvingDate,
            date: date.datumDate,
            time: date.tijdDate,
            location: date.locatieDate
          }
        })
    })
    .catch((error) => {
      console.error('Error fetching date by ID:', error)
      throw error
    })
}
