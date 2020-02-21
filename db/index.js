// This is my javascript file.
// This is where I am going to write some sample Query Parameters to test.
// Using MySQL workbench to test query parameters is a fantastic idea!

"use strict";

const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  viewAllHouses() {
    return this.connection.query();
  }

  viewAllRoles() {
    return this.connection.query();
  }
  viewAllEmployeesByDepartment() {
    return this.connection.query(
      `
        SELECT
            employee.id,
            employee.first_name,
            employee.last_name,
            role.title 
            department.name
        FROM 
            employee
        LEFT JOIN
            role.title ON role.id = employee.role_id
        FROM 
            role
        LEFT JOIN
            department.name ON role.department_id = department.id
        FROM
            department;
        `
    );
  }
}

module.export = new DB(connection);
