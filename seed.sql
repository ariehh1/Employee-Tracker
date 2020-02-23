INSERT INTO role (title, salary, department_id)
VALUES ("Sales Analyst", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 90000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Front End Engineer", 95000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Back End Engineer", 75000, 2); 


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ari", "Horowitz", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kobe", "Bryant", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Babe", "Ruth", 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Serena", "Williams", 4, 4);


INSERT INTO department (department, manager)
VALUES ("Sales", "Jeff Gordon");
INSERT INTO department (department, manager)
VALUES ("Engineering", "Michelle Wie");