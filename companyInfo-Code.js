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


function init() {
  console.log("Let's view you company.")
  inquirer.prompt([
      {
          type: 'list',
          name: 'task',
          message: 'What would you like to do?',
          choices: ['Add a new department', 'Add a new employee role', 'Add a new employee']
      },
  ])
      .then((data) => {
        switch (data.task) {
          case 'Add a new department':
            createDepartment();
            break;
  
          case 'Add a new employee role':
            createRole();
            break;
  
          case 'Add a new employee':
            createEmployee();
            break;

          default:
            console.log(`Invalid action: ${data.task}`);
            break;
        }
      })
};


createDepartment = () => {
  console.log('Creating a new department...\n');
  inquirer.prompt([
    {
        type: 'input',
        name: 'newDepartment',
        message: 'What is the name of the new department?',
    },
])
    .then((data) => {
      const query = connection.query(
        'INSERT INTO department SET ?',
        {
          name: `${data.newDepartment}`,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} department inserted!\n`);
          // Call init() AFTER the INSERT completes
          init();
        }
      );
        // logs the actual query being run
        console.log(query.sql);
    })
};


// createRole()


// createEmployee()


// readDepartment()


// readRole()


// readEmployee()


// updateEmployeeRole()



connection.connect((err) => {
  if (err) throw err;
console.log(`Connection made on PORT: ${connection.threadId}\n`)
init();
});
