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
          console.log(`${res.affectedRows} department created!\n`);
          // Call init() AFTER the INSERT completes
          init();
        }
      );
        // logs the actual query being run
        console.log(query.sql);
    })
};


createRole = () => {
  console.log('Creating a new role...\n');
  inquirer.prompt([
    {
        type: 'input',
        name: 'newRole',
        message: 'What is the new role?',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary of this role?',
  },
    // {
    //   type: 'list',
    //   name: 'departmentID',
    //   message: 'Which department is this role in?',
    //   choice: '',
    // },
])
    .then((data) => {
      const query = connection.query(
        'INSERT INTO role SET ?',
        {
          title: `${data.newRole}`,
          salary: `${data.salary}`,
          // department_id: `${data.departmentID}`,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} role created!\n`);
          // Call init() AFTER the INSERT completes
          init();
        }
      );
        // logs the actual query being run
        console.log(query.sql);
    })

}


createEmployee= () => {
  console.log('Creating a new employee...\n');
  inquirer.prompt([
    {
        type: 'input',
        name: 'firstName',
        message: 'What is the employees first name?',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What is the employees last name?',
    },
      // {
    //   type: 'list',
    //   name: 'roleID',
    //   message: 'Which role does this employee hold?',
    //   choice: '',
    // },
    // {
    //   type: 'list',
    //   name: 'departmentID',
    //   message: 'Which department is this employee in?',
    //   choice: '',
    // },
])
    .then((data) => {
      const query = connection.query(
        'INSERT INTO employee SET ?',
        {
          first_name: `${data.firstName}`,
          last_name: `${data.lastName}`,
          // role_id: `${data.roleID}`,
          // department_id: `${data.departmentID}`,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} employee created!\n`);
          // Call init() AFTER the INSERT completes
          init();
        }
      );
        // logs the actual query being run
        console.log(query.sql);
    })

}


// readDepartment()


// readRole()


// readEmployee()


// updateEmployeeRole()



connection.connect((err) => {
  if (err) throw err;
console.log(`Connection made on PORT: ${connection.threadId}\n`)
init();
});
