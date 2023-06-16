const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const multer = require('multer')
const path = require('path')

const app = express()
const upload = multer({ dest: 'uploads/' }) // Map waar geüploade foto's worden opgeslagen

// Middleware om JSON request bodies te parsen
app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const uploadPath = path.join(__dirname, 'uploads')
console.log('Upload path:', uploadPath)

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

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  const query = 'SELECT * FROM users WHERE id = ?'
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error fetching user:', error)
      res.status(500).json({ error: 'Error fetching user.' })
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: 'User not found.' })
      } else {
        res.json(results[0])
      }
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

app.put('/users/:id', upload.single('picture'), (req, res) => {
  const id = req.params.id
  const { name, age, gender, show, interest } = req.body

  let picture = ''
  if (req.file) {
    // If an image was uploaded, save the filename
    picture = req.file.filename // Save the filename instead of the file path
    console.log('Received picture:', req.file)
  }

  console.log('Request body:', req.body)

  const query =
    'UPDATE users SET name = ?, age = ?, gender = ?, `show` = ?, interest = ?, picture = ? WHERE id = ?'
  connection.query(query, [name, age, gender, show, interest, picture, id], (error, results) => {
    if (error) {
      console.error('Error updating user:', error)
      res.status(500).json({ error: 'Error updating user.' })
    } else {
      console.log('Affected rows:', results.affectedRows)
      res.json({ id: id, message: 'User updated.', picture: picture }) // Return the saved picture filename
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

app.post('/dates', (req, res) => {
  const { userId, naamDate, datumDate, tijdDate, locatieDate, beschrijvingDate } = req.body
  const query =
    'INSERT INTO dates (userId, naamDate, datumDate, tijdDate, locatieDate, beschrijvingDate) VALUES (?, ?, ?, ?, ?, ?)'
  connection.query(
    query,
    [userId, naamDate, datumDate, tijdDate, locatieDate, beschrijvingDate],
    (error, results) => {
      if (error) {
        console.error('Error adding date:', error)
        res.status(500).json({ error: 'Error adding date.' })
      } else {
        const dateId = results.insertId
        res.json({ id: dateId, message: 'Date added.' })
      }
    }
  )
})

app.get('/dates', (req, res) => {
  const query = 'SELECT * FROM dates'
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching dates:', error)
      res.status(500).json({ error: 'Error fetching dates.' })
    } else {
      res.json(results)
    }
  })
})

app.get('/dates/:id', (req, res) => {
  const id = req.params.id
  const query = 'SELECT * FROM dates WHERE id = ?'
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error fetching date:', error)
      res.status(500).json({ error: 'Error fetching date.' })
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: 'Date not found.' })
      } else {
        res.json(results[0])
      }
    }
  })
})
// Start de server
app.listen(3000, () => {
  console.log('De server is gestart op poort 3000.')
})
