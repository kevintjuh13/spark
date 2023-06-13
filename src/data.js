// Hier export ik mijn databases, om te gebruiken in mijn components met gebruik van fetch()

// Dit is een test table

export const fetchOpties = () => {
  return fetch('http://localhost:3000/intresses')
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching data: ', error))
}

// bekijkt of the email die ingevoerd is al bestaat

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
export const updateUserData = (user) => {
  return fetch(`http://localhost:3000/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user) // Pass the user object directly as the request body
  })
    .then((response) => {
      console.log('Response from updating user data:', response)
      return response.json()
    })
    .catch((error) => console.error('Error updating user data:', error))
}

export const addDate = (date) => {
  console.log('Adding date:', date)
  return fetch(`http://localhost:3000/dates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(date) // Use the date object directly
  })
    .then((response) => {
      console.log('Response from adding date:', response)
      return response.json()
    })
    .catch((error) => console.error('Error adding date:', error))
}

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
        // Fetch the user data using the userId
        return fetch(`http://localhost:3000/users/${date.userId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Error fetching user')
            }
            return response.json()
          })
          .then((userData) => {
            // Combine the date and user data
            return {
              id: date.id,
              user: {
                id: date.userId,
                name: userData.name,
                age: userData.age,
                show: userData.show,
                gender: userData.gender,
                interest: userData.interest
              },
              name: date.naamDate,
              description: date.beschrijvingDate,
              date: date.datumDate,
              time: date.tijdDate,
              location: date.locatieDate
            }
          })
      })

      // Wait for all datePromises to resolve
      return Promise.all(datePromises)
    })
    .catch((error) => {
      console.error('Error fetching dates:', error)
      throw error
    })
}

export const postDate = (dateData) => {
  const { userId, naamDate, beschrijvingDate, datumDate, tijdDate, locatieDate } = dateData

  const data = {
    naamDate: naamDate,
    beschrijvingDate: beschrijvingDate,
    datumDate: datumDate,
    tijdDate: tijdDate,
    locatieDate: locatieDate,
    userId: userId // Use the user ID here
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
          id: userId, // Use the same user ID that was passed in
          name: null, // Update this with the appropriate user name
          age: null // Update this with the appropriate user age
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
              age: userData.age
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
