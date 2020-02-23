INSERT INTO employee_trackerDB.department (department_id, department_name)
VALUES (1, "Engineering");

INSERT INTO employee_trackerDB.department (department_id, department_name)
VALUES (2, "Finance");

INSERT INTO employee_trackerDB.department (department_id, department_name)
VALUES (3, "Legal");

INSERT INTO employee_trackerDB.department (department_id, department_name)
VALUES (4, "Sales");


INSERT INTO employee_trackerDB.role (role_id, role_title, role_salary, department_id, manager)
VALUES (1, "Front End Engineer", 100000, 1, 1);

INSERT INTO employee_trackerDB.role (role_id, role_title, role_salary, department_id, manager)
VALUES (2, "Back End Engineer", 80000, 1, 0);

INSERT INTO employee_trackerDB.role (role_id, role_title, role_salary, department_id, manager)
VALUES (3, "Finance Manager", 100000, 2, 1);

INSERT INTO employee_trackerDB.role (role_id, role_title, role_salary, department_id, manager)
VALUES (4, "Accountant", 60000, 2, 0);

INSERT INTO employee_trackerDB.role (role_id, role_title, role_salary, department_id, manager)
VALUES (5, "Financial Analyst", 70000, 2, 0);

INSERT INTO employee_trackerDB.role (role_id, role_title, role_salary, department_id, manager)
VALUES (6, "Legal Team Leader ", 90000, 3, 1);

INSERT INTO employee_trackerDB.role (role_id, role_title, role_salary, department_id, manager)
VALUES (7, "Lawyer", 80000, 3, 0);

INSERT INTO employee_trackerDB.role (role_id, role_title, role_salary, department_id, manager)
VALUES (8, "Sales Manager", 80000, 4, 1);

INSERT INTO employee_trackerDB.role (role_id, role_title, role_salary, department_id, manager)
VALUES (9, "Sales Analyst", 50000, 4, 0);


INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (1, "Ari", "Horowitz", 7, 4);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (2, "Kobe", "Bryant", 1, Null);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (3, "Tiger", "Woods", 3, Null);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (4, "Serena", "Williams", 6, Null);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (5, "Drew", "Brees", 9, 7);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (6, "Babe", "Ruth", 2, 2);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (7, "Jeff", "Gordon", 8, Null);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (8, "Novak", "Djokovic", 9, 7);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (9, "Steve", "Nash", 9, 7);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (10, "Ichiro", "Suzuki", 2, 2);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (11, "Peyton", "Manning", 5, 3);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (12, "Phil", "Mickelson", 7, 4);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (13, "Alex", "Ovechkin", 9, 7);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (14, "Michelle", "Wie", 9, 7);

INSERT INTO employee_trackerDB.employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (15, "Dirk", "Nowitzki", 4, 3);
