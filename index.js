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
  database: "employee_managerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id" + connection.threadID);
  makeChoice();
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

function makeChoice() {
  inquirer
    .prompt([
      {
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View all departments",
          "View job titles",
          "Add an employee",
          "Add a department",
          "Add a role",
          "Update employee role",
          "Exit"
        ]
      }
    ])
    .then(answers => {
      switch (answers.choice) {
        case "View all employees":
          viewEmployees();
          break;
        case "View all departments":
          viewDepartments();
          break;
        case "View job titles":
          viewRoles();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Update employee role":
          updateEmployeeRole();
          break;
        default:
          console.log("Your changes have been saved");
          connection.end();
      }
    });
}

const getDepartment = (role, fname, lname) => {
  connection.query("SELECT id, department FROM department", function(
    err,
    allDepts
  ) {
    if (err) throw err;

    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "department",
          message: "Select employee's department from the list: ",
          choices: function() {
            const choices = [];
            allDepts.forEach(dept => {
              let choice = dept.id + " - " + dept.department;
              choices.push(choice);
            });
            return choices;
          }
        }
      ])
      .then(function(answers) {
        const thisRoleId = parseInt(role.split(" - ")[0]);
        const thisDeptId = parseInt(answers.department.split(" - ")[0]);
        const query = connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: fname,
            last_name: lname,
            role_id: thisRoleId,
            manager_id: thisDeptId
          },
          function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " employee inserted!\n");

            makeChoice();
          }
        );
      });
  });
};

const addEmployee = () => {
  connection.query("SELECT id, title FROM role", function(err, allRoles) {
    if (err) throw err;

    inquirer
      .prompt([
        {
          type: "input",
          name: "fname",
          message: "Employee's first name: "
        },
        {
          type: "input",
          name: "lname",
          message: "Employee's last name: "
        },
        {
          type: "rawlist",
          name: "role",
          message: "Select employee's role from the list: ",
          choices: function() {
            const choices = [];
            allRoles.forEach(role => {
              let choice = role.id + " - " + role.title;
              choices.push(choice);
            });
            return choices;
          }
        }
      ])
      .then(answers => {
        getDepartment(answers.role, answers.fname, answers.lname);
      });
  });
};

const viewEmployees = () => {
  connection.query(
    "SELECT first_name, last_name, title, salary, department, manager FROM employee LEFT JOIN role ON role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id ",
    function(err, res) {
      if (err) throw err;
      console.table(res);
      makeChoice();
    }
  );
};

const viewDepartments = () => {
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    console.table(res);
    makeChoice();
  });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Enter name of the department you'd like to add: "
      },
      {
        type: "input",
        name: "manager",
        message: "Enter first and last name of department manager: "
      }
    ])
    .then(answers => {
      const query = connection.query(
        "INSERT INTO department SET ?",
        {
          department: answers.department,
          manager: answers.manager
        },
        function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " department inserted!\n");

          makeChoice();
        }
      );
    });
};

const viewRoles = () => {
  connection.query(
    "SELECT title, salary, department FROM role LEFT JOIN department ON department.id = role.department_id",
    function(err, res) {
      if (err) throw err;
      console.table(res);
      makeChoice();
    }
  );
};

const addRole = () => {
  connection.query("Select id, department FROM department", function(
    err,
    depId
  ) {
    if (err) throw err;

    inquirer
      .prompt([
        {
          type: "input",
          name: "role",
          message: "Enter a name of a job title you'd like to add: "
        },
        {
          type: "input",
          name: "salary",
          message: "Enter a corresponding salary to a job title you're adding: "
        },
        {
          type: "rawlist",
          name: "department",
          message:
            "Select a corresponding department to a job title you're adding: ",
          choices: function() {
            const choices = [];
            depId.forEach(dep => {
              let choice = dep.id + " - " + dep.department;
              choices.push(choice);
            });
            return choices;
          }
        }
      ])
      .then(answers => {
        const thisDepId = parseInt(answers.department.split(" - ")[0]);
        const query = connection.query(
          "INSERT INTO role SET ?",
          {
            title: answers.role,
            salary: answers.salary,
            department_id: thisDepId
          },
          function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " job title inserted!\n");

            makeChoice();
          }
        );
      });
  });
};

const updateEmployeeRole = () => {
  connection.query("Select id, first_name, last_name FROM employee", function(
    err,
    res
  ) {
    if (err) throw err;

    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "employee",
          message: "Select an employee who's role you like to update: ",
          choices: function() {
            const choices = [];
            res.forEach(employee => {
              let choice =
                employee.id +
                " - " +
                employee.first_name +
                " " +
                employee.last_name;
              choices.push(choice);
            });
            return choices;
          }
        }
      ])
      .then(answers => {
        const thisEmployeeId = parseInt(answers.employee.split(" - ")[0]);
        console.log("Updating employee id: " + thisEmployeeId);
        getRole(thisEmployeeId);
      });
  });
};

const getRole = thisEmployeeId => {
  connection.query("SELECT id, title  FROM role", function(err, res) {
    if (err) throw err;

    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "role",
          message: "Select new role for employee: ",
          choices: function() {
            const choices = [];
            res.forEach(role => {
              let choice = role.id + " - " + role.title;
              choices.push(choice);
            });
            return choices;
          }
        }
      ])
      .then(answers => {
        const thisRoleId = parseInt(answers.role.split(" - ")[0]);
        updateEmployee(thisRoleId, thisEmployeeId);
      });
  });
};

const updateEmployee = (thisRoleId, thisEmployeeId) => {
  connection.query(
    "UPDATE employee SET ? WHERE ?",
    [
      {
        role_id: thisRoleId
      },
      {
        id: thisEmployeeId
      }
    ],
    function(error) {
      if (error) throw err;
      console.log("Employee's role has been updated!");
      makeChoice();
    }
  );
};
