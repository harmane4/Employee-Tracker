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
        "View all employees by department",
        "View all roles",
        "View all employees",
        "View all departments",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee role",
      ],
    },
  ]);
  switch (mainQuestionAnswers.start) {
    case "View all employees by department":
      viewAllEmployees();
      break;
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
    {
      type: "list",
      name: "managerName",
      message: "Who is the employee's manager?",
      choices: ["John Doe", "Sarah Safe", "Mike Man"],
    },
  ]);
  console.log(addEmployeeAnswers);

  // connection.query(
  //   "INSERT INTO employee (firstName, lastName, ) VALUES (?,?,?)",
  //   [addEmployeeAnswers.firstName, addEmployeeAnswers.lastName],
  //   function (err, results) {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.table(results);
  //     }
  //   }
  // );
}

async function addDepartment() {
  const addDepartmentAnswers = await inquirer.prompt([
    {
      type: "input",
      name: "department",
      message: "What department would you like to add?",
    },
  ]);
  console.log(addDepartmentAnswers);

  connection.query(
    "INSERT INTO department (departmentName) VALUES (?)",
    [addDepartmentAnswers.department],
    function (err, results) {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
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
      firstQuestion();
      console.table(departments);
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
  ]);
  console.log(addRoleAnswers);
}

function updateEmployee() {}

function viewAllEmployees() {
  // SELECT * FROM employee console.table
}

function viewAllRoles() {
  // SELECT * FROM roles console.table
}

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
});

// class Employee {
//   constructor(id, firstName, lastName, roles_id, manager_id) {
//     this.id;
//     this.firstName;
//     this.lastName;
//     this.roles_id;
//     this.manager_id;
//   }
// }

// class Department {
//   constructor(id, departmentName) {
//     this.id;
//     this.departmentName;
//   }
// }

// class Roles {
//   constructor(id, title, salary, department_id) {
//     this.id;
//     this.title;
//     this.salary;
//     this.department_id;
//   }
// }
