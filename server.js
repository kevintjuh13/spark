const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

// Middleware om JSON request bodies te parsen
app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

// Maak een nieuwe database verbinding aan
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'spark'
})

// Verbind met de database
connection.connect((err) => {
  if (err) {
    console.error('Fout bij het verbinden met de database: ', err)
  } else {
    console.log('Verbonden met de database!')
  }
})

// USERS table
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users'
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Fout bij het ophalen van de gebruikersgegevens: ', error)
      res.status(500).send('Er is een fout opgetreden bij het ophalen van de gebruikersgegevens.')
    } else {
      res.json(results)
    }
  })
})

app.post('/users', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  console.log('Received user data: ', email, password)
  const query = `INSERT INTO users (email, password) VALUES (?, ?)`
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      console.error('Error adding user: ', error)
      res.status(500).json({ error: 'Error adding user.' })
    } else {
      const userId = results.insertId
      res.json({ id: userId, message: 'User added.' })
    }
  })
})

app.put('/users/:id', (req, res) => {
  const id = req.params.id
  const { name, age, gender, show, interest } = req.body // Use object destructuring to extract the values
  const query =
    'UPDATE users SET name = ?, age = ?, gender = ?, `show` = ?, interest = ? WHERE id = ?' // Wrap `show` with backticks
  connection.query(query, [name, age, gender, show, interest, id], (error, results) => {
    if (error) {
      console.error('Error updating user:', error)
      res.status(500).json({ error: 'There was an error updating the user.' })
    } else {
      res.json({ message: 'User updated.' })
    }
  })
})

// INTRESSE TABLE
app.get('/intresses', (req, res) => {
  const query = 'SELECT * FROM intresses'
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Fout bij het ophalen van de intresses: ', error)
      res.status(500).send('Er is een fout opgetreden bij het ophalen van de intresses.')
    } else {
      res.json(results)
    }
  })
})

// TEST TABLES
app.get('/tests', (req, res) => {
  const query = 'SELECT * FROM test'
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Fout bij het ophalen van de testgegevens: ', error)
      res.status(500).send('Er is een fout opgetreden bij het ophalen van de testgegevens.')
    } else {
      res.json(results)
    }
  })
})

// app.post('/users', (req, res) => {
//   const email = req.body.email
//   const password = req.body.password
//   const query = `INSERT INTO users (email, password) VALUES (?, ?)`
//   connection.query(query, [email, password], (error, results) => {
//     if (error) {
//       console.error('Error adding user:', error)
//       res.status(500).json({ error: 'There was an error adding the user.' })
//     } else {
//       res.json({ message: 'User added.' })
//     }
//   })
// })

app.delete('/tests/:id', (req, res) => {
  const id = req.params.id
  const query = 'DELETE FROM test WHERE id = ?'
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Fout bij het verwijderen van de testgegevens: ', error)
      res.status(500).send('Er is een fout opgetreden bij het verwijderen van de testgegevens.')
    } else {
      res.json({ message: 'Gegevens verwijderd.' })
    }
  })
})

app.put('/tests/:id', (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const query = 'UPDATE test SET name = ? WHERE id = ?'
  connection.query(query, [name, id], (error, results) => {
    if (error) {
      console.error('Fout bij het bijwerken van de testgegevens: ', error)
      res.status(500).send('Er is een fout opgetreden bij het bijwerken van de testgegevens.')
    } else {
      res.json({ message: 'Gegevens bijgewerkt.' })
    }
  })
})

app.get('/test2', (req, res) => {
  const query = 'SELECT * FROM test2'
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Fout bij het ophalen van de testgegevens: ', error)
      res.status(500).send('Er is een fout opgetreden bij het ophalen van de testgegevens.')
    } else {
      res.json(results)
    }
  })
})

// Start de server
app.listen(3000, () => {
  console.log('De server is gestart op poort 3000.')
})
