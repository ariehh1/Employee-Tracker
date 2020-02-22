"use strict";

const inquirer = require("inquirer");
const mysql = require("mysql");
const CFonts = require("cfonts");
const consoleTable = require("console.table");
const db = require("./db");

CFonts.say("Employee|Tracker", {
  font: "block", // define the font face
  align: "left", // define text alignment
  colors: ["system"], // define all colors
  background: "transparent", // define the background color, you can also use `backgroundColor` here as key
  letterSpacing: 1, // define letter spacing
  lineHeight: 1, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  maxLength: "0", // define how many character can be on one line
  gradient: false, // define your two gradient colors
  independentGradient: false // define if you want to recalculate the gradient for each new line
});

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Blazers1",
  database: "employee_trackerDB"
});

connection.connect(err => {
  if (err) throw err;
  promptUser();
});

function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "request",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Roles",
          "View All Departments",
          "Add Employee",
          "Add Role",
          "Add Department",
          "Update Employee Role",
          "Update Employee Manager",
          "Remove Employee",
          "Remove Role",
          "Remove Department",
          "Exit"
        ]
      }
    ])
    .then(action => {
      switch (action.request) {
        case "View All Employees":
          viewAllEmployees();
          break;

        case "View All Roles":
          viewAllRoles();
          break;

        case "View All Departments":
          viewAllDepartments();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "Update Employee Manager":
          updateEmployeeManager();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Remove Role":
          removeRole();
          break;

        case "Remove Department":
          removeDepartment();
          break;

        case "Exit":
          exit();
      }
    });
}

//         default:
//           console.log("Thank you for using the application!");
//       }
//     });
// }

function viewAllEmployees() {
  var query = "SELECT * FROM employee";
  connection.query(query, function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    promptUser();
  });
}

function viewAllRoles() {
  var query = "SELECT * FROM employee_trackerDB.role";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}

function viewAllDepartments() {
  var query = "SELECT * FROM employee_tracker.DB.role";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "Input employee's first name."
      },
      {
        name: "lastName",
        type: "input",
        message: "Input employee's last name."
      },
      {
        name: "role_id",
        type: "input",
        message: "Input employee's role ID."
      },
      {
        name: "manager_id",
        type: "number",
        message:
          "Input the manager ID of the employee. ** Leave blank if none **"
      }
    ])

    .then(function(answer) {
      let manager_id = answer.manager_id;
      if (!answer.manager_id) {
        manager_id = null;
      }
      const query =
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
      connection.query(
        query,
        [answer.firstName, answer.lastName, answer.role_id, manager_id],
        function(err, res) {
          console.log("You added a new employee");
          promptUser();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "role",
        type: "input",
        message: "Input name of new role/position."
      },
      {
        name: "salary",
        type: "input",
        message: "Input the salary for this role."
      },
      {
        name: "department_id",
        type: "input",
        message: "Input the department ID."
      }
    ])

    .then(function(answer) {
      const query =
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
      connection.query(
        query,
        [answer.role, answer.salary, answer.department_id],
        function(err, res) {
          console.log("You added a new role");
          promptUser();
        }
      );
    });
}
