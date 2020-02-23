DROP DATABASE IF EXISTS employee_managerDB;

CREATE DATABASE employee_managerDB;

USE  employee_managerDB

CREATE TABLE employee (
     id INTEGER AUTO_INCREMENT NOT NULL,
     first_name VARCHAR (30)  NOT NULL,
     last_name VARCHAR (30) NOT NULL,
     role_id  INTEGER REFERENCES role(id),
     manager_id INTEGER REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE department (
     id INTEGER AUTO_INCREMENT NOT NULL,
     department VARCHAR (50) NOT NULL,
     manager VARCHAR (50) NOT NULL,
     PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR (50) NOT NULL,
    salary DECIMAL(6) NOT NULL,
    department_id INTEGER REFERENCES department(id),
    PRIMARY KEY (id)
);