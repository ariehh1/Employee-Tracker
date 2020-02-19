"use strict";

const inquirer = require("inquirer");
const mysql = require("mysql");
const CFonts = require("cfonts");

CFonts.say("Employee|Manager", {
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

const promptMessages = {
  songsByArtist: "Find songs by artist",
  artistsMoreThanOnce: "Find all artists who appear more than once",
  dataWithinRange: "Find data within a specific range",
  searchForSong: "Search for a specific song",
  exit: "exit"
};

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
          "View All Employees By Department",
          "View All Employees By Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
          "View All Roles",
          "Add Role",
          "Remove Role",
          "View All Departments"
        ]
      }
    ])
    .then(action => {
      switch (action.request) {
        case "View All Employees":
          sendEmployees();
          break;
      }
    });
}
