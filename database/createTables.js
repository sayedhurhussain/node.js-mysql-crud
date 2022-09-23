const express = require('express');
const app = express();
const db = require('../config/db')

app.post("/createtable", (req, res) => {
    
    let tableName = 'users11';
    
    // Query to create table
    let query = `CREATE TABLE ${tableName} (
        id int AUTO_INCREMENT,
        title VARCHAR(255),
        body VARCHAR(255),
        PRIMARY KEY (id))
        `;
    
    db.query(query, (err, rows) => {
        if(err) return res.status(500)
            .send("Table Creation Failed");
    
        return res.send(
  `Successfully Created Table - ${tableName}`);
    })
  });

  module.exports = app;