const mysql = require('mysql2');

// Input in .env file
require("dotenv").config();

let db_con  = mysql.createConnection({
    // host     : 'localhost',
    // user     : 'user',
    // password : 'LoraLora#123',
    // database : 'node_mysql_crud_api'

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

// Connect
db_con.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("connected to Database");
    }
});
  
// module.exports =db_con;
module.exports = db_con.promise();

