const express = require('express');
const app = express();
const db = require('../config/db')

// Create DB
app.post('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysqlperson';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

module.exports = app;