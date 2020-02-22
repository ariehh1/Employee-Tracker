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
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    promptUser();
  });

  //   function viewAllEmployeesByDepartment() {
  //     // connection.query(, (err, res) => {
  // if(err) throw err;
  // console.table(res);
  // promptUser();
  //     // });
}
