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

// Definieer een API endpoint om alle testgegevens uit de database op te halen
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

app.post('/tests', (req, res) => {
  const name = req.body.name
  const query = `INSERT INTO test (name) VALUES (?)`
  connection.query(query, [name], (error, results) => {
    if (error) {
      console.error('Fout bij het toevoegen van de testgegevens: ', error)
      res.status(500).send('Er is een fout opgetreden bij het toevoegen van de testgegevens.')
    } else {
      res.json({ message: 'Gegevens toegevoegd.' })
    }
  })
})

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
