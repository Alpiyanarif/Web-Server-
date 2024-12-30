'use strict'

const express = require('express');
const app = express();
const port = 8000;

// Route yang memberikan respons teks "Hello world"
app.get('/', (req, res) => {
    res.send('Hello world!\n')
});

// Route /me yang memberikan respon teks "Hello world!alpiyan"
app.get('/me', (req, res) => {
    res.send('Hello world!alpiyan\n'); // Mengembalikan nama pengguna
});

// Menjalankan server pada port 8000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
/*
Optional [ROUTE] '/me'
[Response] => Dicoding username.
*/