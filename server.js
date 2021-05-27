// Packages needed for this application
const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const cTable = require("console.table");

const connection = mysql2.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "Muskrat348!",
  database: "employee_trackerDB",
});

firstQuestion();

async function firstQuestion() {
  const mainQuestionAnswers = await inquirer.prompt([
    {
      type: "list",
      name: "start",
      message: "What would you like to do?",
      choices: [
        "View all roles",
        "View all employees",
        "View all departments",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee role",
        "Exit",
      ],
    },
  ]);
  console.log("mainQ", mainQuestionAnswers.start);

  switch (mainQuestionAnswers.start) {
    case "View all roles":
      viewAllRoles();
      break;
    case "View all departments":
      viewAllDepartments();
      break;
    case "Add a department":
      addDepartment();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Update employee role":
      updateEmployee();
      break;
    case "View all employees":
      viewAllEmployees();
      break;
    case "Exit":
      exitFunction();
      break;
  }
}

async function addEmployee() {
  const addEmployeeAnswers = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name? ",
    },
    {
      type: "input",
      name: "role",
      message:
        "Please enter your role ID. Sales = 1, Engineering = 2, Finance = 3, Legal = 4, Manager = 5",
    },
    {
      type: "input",
      name: "managerName",
      message: "Please enter your manager ID",
    },
  ]);
  console.log(addEmployeeAnswers);

  connection.query(
    "INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)",
    [
      addEmployeeAnswers.firstName,
      addEmployeeAnswers.lastName,
      addEmployeeAnswers.role,
      addEmployeeAnswers.managerName,
    ],
    function (err, results) {
      if (err) {
        console.error(err);
      } else {
        console.log("Success, employee added");
        firstQuestion();
      }
    }
  );
}

async function addDepartment() {
  const addDepartmentAnswers = await inquirer.prompt([
    {
      type: "input",
      name: "department",
      message: "What department would you like to add?",
    },
  ]);

  connection.query(
    "INSERT INTO department (department_name) VALUES (?)",
    [addDepartmentAnswers.department],
    function (err, results) {
      if (err) {
        console.error(err);
      } else {
        console.log("Success, new department added");
        firstQuestion();
      }
    }
  );
}

async function viewAllDepartments() {
  connection.query("SELECT * FROM department", function (error, departments) {
    if (error) {
      console.log(error);
    } else {
      console.table(departments);
      firstQuestion();
    }
  });
}

async function addRole() {
  const addRoleAnswers = await inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "What role would you like to add?",
    },
    {
      type: "input",
      name: "salary",
      message: "What salary does the role have?",
    },
  ]);
  connection.query(
    "INSERT INTO roles (title, salary) VALUES (?, ?)",
    [addRoleAnswers.role, addRoleAnswers.salary],
    function (err, results) {
      if (err) {
        console.error(err);
      } else {
        console.log("Success, new role added");
        firstQuestion();
      }
    }
  );
  console.log(addRoleAnswers, "Success, new role added");
  firstQuestion();
}

function updateEmployee() {}

function viewAllEmployees() {
  connection.query("SELECT * FROM employee", function (error, employees) {
    if (error) {
      console.log(error);
    } else {
      console.table(employees);
      firstQuestion();
    }
  });
}

function viewAllRoles() {
  connection.query("SELECT * FROM roles", function (error, roles) {
    if (error) {
      console.log(error);
    } else {
      console.table(roles);
      firstQuestion();
    }
  });
}

function exitFunction() {
  connection.end();
}

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
});
