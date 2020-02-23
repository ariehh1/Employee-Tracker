"use strict";

const inquirer = require("inquirer");
const mysql = require("mysql");
const CFonts = require("cfonts");
const cTable = require("console.table");

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

console.log("Welcome to the Employee Tracker application!");

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

// default:
//   console.log("Thank you for using the application!");

function viewAllEmployees() {
  var query = "SELECT * FROM employee";
  console.log(query);
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
  var query = "SELECT * FROM employee_trackerDB.department";
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

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "Input the name of new department"
      }
    ])

    .then(function(answer) {
      const query =
        "INSERT INTO department (title, salary, department_id) VALUES (?)";
      connection.query(query, [answer.department], function(err, res) {
        console.log("You added a new department");
        promptUser();
      });
    });
}

function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Input first name of employee"
      },
      {
        name: "last_name",
        type: "input",
        message: "Input last name of employee"
      },
      {
        name: "role",
        type: "number",
        message: "Input new ID number"
      }
    ])

    .then(function(answer) {
      var query =
        "UPDATE employee SET role_id=? WHERE (first_name=? AND last_name=?)";
      connection.query(
        query,
        [answer.first_name, answer.last_name, answer.role],
        function(err, res) {
          console.table("You updated the employee's role");
          promptUser();
        }
      );
    });
}

function updateEmployeeManager() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Input first name of employee"
      },
      {
        name: "last_name",
        type: "input",
        message: "Input last name of employee"
      },
      {
        name: "manager_id",
        type: "number",
        message:
          "Input new manager id number of employee. ** Leave blank if none **"
      }
    ])

    .then(function(answer) {
      let manager_id = answer.manager_id;
      if (!answer.manager_id) {
        manager_id = null;
      }
      var query =
        "UPDATE employee SET manager_id=? WHERE (first_name=? AND last_name=?)";
      connection.query(
        query,
        [answer.first_name, answer.last_name, manager_id],
        function(err, res) {
          console.table("You updated the employee's manager number!");
          promptUser();
        }
      );
    });
}

function removeEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Input employee first name"
      },
      {
        name: "last_name",
        type: "input",
        message: "Input employee last name"
      }
    ])

    .then(function(answer) {
      var query = "DELETE FROM employee WHERE (first_name=? AND last_name=?)";
      connection.query(query, [answer.first_name, answer.last_name], function(
        err,
        res
      ) {
        console.table("Employee fired!");
        promptUser();
      });
    });
}

function removeRole() {
  inquirer
    .prompt([
      {
        name: "role",
        type: "input",
        message: "Input the role"
      }
    ])

    .then(function(answer) {
      var query = "DELETE FROM role WHERE (title=?)";
      connection.query(query, [answer.role], function(err, res) {
        console.table("Role vanished!");
        promptUser();
      });
    });
}

function removeDepartment() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "Input the department"
      }
    ])

    .then(function(answer) {
      var query = "DELETE FROM department WHERE (name=?)";
      connection.query(query, [answer.department], function(err, res) {
        console.table("Department has downsized!");
        promptUser();
      });
    });
}

function exit() {
  console.log("Application logging off");
  connection.end();
}
