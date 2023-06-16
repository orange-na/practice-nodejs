const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

const app = express();

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Yuto8181nmb',
    database:'day_4_9_db',
});

app.use(express.json());
app.use(cors());

app.listen(8800, () => {
    console.log('Connected to backend!!');
})

app.get("/", (req, res) => {
    res.send("hello worls");
})

app.get('/books', (req, res) => {
    const q = "SELECT * FROM test"
    db.query(q, (error, results) => {
        if(error) return res.json(error);
        return res.json(results);
    })
})

app.post('/books', (req, res) => {
    const q = 'INSERT INTO test (`title`, `desc`, `cover`,`price`) VALUES (?)'
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price,
        ] 
    db.query(q,[values], (err, restults) => {
        if(err) return res.json(err);
        return res.json('succsess');
    })
})

app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q = 'DELETE FROM test WHERE id = ?'

    db.query(q, [bookId], (err, results) => {
        if(err) return res.json(err);
        return res.json('Book has been deleted successfully');
    })
})

app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q = 'UPDATE test SET `title` = ?, `desc` = ?, `cover` = ?, `price` = ? WHERE id = ?';

    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price,
    ]

    db.query(q, [...values, bookId], (err, results) => {
        if(err) return res.json(err);
        return res.json('Book has been updated successfully')
    })
})