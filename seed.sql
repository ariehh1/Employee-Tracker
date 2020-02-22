INSERT INTO department (name) 
VALUES 
('Accounting'),
('HR'),
('Sales'),
('Engineering'),
('Finance'),
('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 97000, 1), ('Recruiter', 60000, 2), ('Account Executive', 85000, 3)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ari', 'Horowitz', 1, 1), ('Kobe', 'Bryant', 1, 1),


-- developing id's with join