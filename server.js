const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username,
        user: 'root',
        // your MySQL password
        password: 'R00t',
        database: 'election'
    },
    console.log('Connected to the election database.')
);


// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Get all candidates
app.get('/api/candidates', (req, res) => {
    const sql = `SELECT * FROM candidates`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

//  GET a single candidate
app.get('/api/candidate/:id', (req, res) => {
    const sql = `SELECT * FROM candidates WHERE id = ?`;
    const params = [req.params.id];

db.query(sql, params, (err, row) => {
    if (err) {
        res.status(400).json({ erroe: err.message });
        return;
    }
    res.json({
        message: 'success',
        data: row
    });
   });
});

// Delete candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Create candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//     VALUES (?,?,?,?)`;
//     const params = [1, 'Ronald', 'Firbank', 1];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log(result);
//     });

//  Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});