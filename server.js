// Packages needed for this application
const inquirer = require("inquirer");
const mysql2 = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "Muskrat348!",
  database: "employee_trackerDB",
});

const mainQuestions = [
  {
    type: "list",
    name: "start",
    message: "What would you like to do?",
    choices: [
      "View all employees by department",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update employee role",
      "Exit",
    ],
  },
];

const addEmployee = [
  {
    type: "input",
    name: "firstName",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "lastName",
    message: "What is the employee's last name?",
  },
  {
    type: "list",
    name: "lastName",
    message: "What is the employee's role",
    choices: [
      "Sales Lead",
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Accountant",
      "Legal Team Lead",
      "Lawyer",
    ],
  },
];

const addDepartment = [
  {
    type: "input",
    name: "department",
    message: "What department would you like to add?",
  },
];

const addRole = [
  {
    type: "input",
    name: "role",
    message: "What role would you like to add?",
  },
];
