require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

require("dotenv").config(); 
const express = require('express');
const app = express();

// Import create table
const cTable = require('./database/createTables');
app.use ('', cTable); 

// Import create database
const cDatabase = require('./database/createDatabase');
app.use ('', cDatabase); 

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/posts", require("./routes/postRoutes"));

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
  
    res.status(500).json({
      message: "Something went rely wrong",
    });
  });


// Listen on pc port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));