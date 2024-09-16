const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123123',
  database: 'demo'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// API Endpoint Example: Fetch Users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// API Endpoint Example: Add a New User
app.post('/users', (req, res) => {
  const { Name, Email } = req.body;
  db.query('INSERT INTO users (Name, Email) VALUES (?, ?)', [Name, Email], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.json({ id: results.insertId, Name, Email });
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});