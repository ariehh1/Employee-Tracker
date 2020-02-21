DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    NAME VARCHAR(30) NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL (10) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT FK_DepartmentRole FOREIGN KEY (department_id),
	REFERENCES department(id),
	ON DELETE CASCADE,
	ON UPDATE CASCADE,
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY(id),
    CONSTRAINT FK_RoleEmployee FOREIGN KEY (role_id)
	    REFERENCES role(id)
	    ON DELETE CASCADE
	    ON UPDATE CASCADE,
    CONSTRAINT FK_ManagerEmployee FOREIGN KEY (manager_id)
	    REFERENCES employee(id)
);