# Employee-Tracker

## Description

This application takes in user input from pre-defined questions and interacts with a company employee database. It is intended to help individuals quikly view and make changes to their company employee roster information. They will be able to view/add departments, roles, employees, and update current employee roles and departments.

A challenge I faced when creating this repository was writing the mySQL queries. For future improvements, I would like to add more functionality to the application, such as deleting a department, role, or employee.


## Installation

To install this repository for use, you will need to download all files in the [Employee-Tracker](https://github.com/glchavez/Employee-Tracker) repository.

Please note, you will need node.js to run this repository on your computer.


## Usage

Starting data has been inputed into the database for a functional example. You can clear the data in the database and create new data by running the schema.sql file in mySQL Workbench.

To run the application in the integrated terminal of the companyInfo-Code.js file, you will need to enter "npm run start". This will bring up the home prompt asking what you would like to do. Select any of the following options:

<ul>
<li>Add a new department</li>
<li>Add a new role</li>
<li>Add a new employee</li>
<li>View all employees</li>
<li>View all departments</li>
<li>View all roles</li>
<li>Update an employees role</li>
</ul>

You will be directed to enter required informatio for each option. Once all data is collected, the database will be updated with user input.

For a video example, please click this [link](https://drive.google.com/file/d/1vGPsb1zSFopiE-E2SkDeoplUTXEcEynF/view?usp=sharing).


## Credits

I would like to provide credit to [The Denver Univeristy Coding Bootcamp](https://bootcamp.du.edu/coding/) for providing me with the materials, intstructions, and one-on-one assistance to perform this project.

Recognition is provided to [W3 Schools](https://www.w3schools.com/) for providing me with resources to better understand mySQL queries and how to pull data from multiple database tables.


## License

MIT License

Copyright &copy; 2021 Giovany Chavez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.