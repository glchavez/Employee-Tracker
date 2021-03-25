const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

// Your port being used
  port: process.env.PORT || 3306,

// Your username
  user: 'root',

// Your password and database being used
  password: 'Coding1738%',
  database: 'company_infoDB',
});

connection.connect((err) => {
  if (err) throw err;
console.log(`Connection made on PORT: ${connection.port}`)});
